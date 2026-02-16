using System;
using System.Collections.Concurrent;
using System.IO;
using System.Net;
using System.Net.Sockets;
using System.Text;
using static System.Runtime.InteropServices.JavaScript.JSType;

class Zerbitzaria
{
    private TcpListener server;
    private ConcurrentDictionary<TcpClient, string> bezeroak = new ConcurrentDictionary<TcpClient, string>();
    private int maxBezeroak = 15;
    private object blokeoa = new object();

    public Zerbitzaria(IPAddress ip, int port)
    {
        this.server = new TcpListener(ip, port);
    }

    public static int Main(string[] args)
    {
        int portu = 13000;

        IPHostEntry infoHost = Dns.GetHostEntry(Dns.GetHostName());
        IPAddress ip = infoHost.AddressList[1];

        Console.WriteLine("Zure datuak:\nIP-a: "+ip+"\nPortua: "+portu+"\n");

        Zerbitzaria zerbitzariAplikazioa = new Zerbitzaria(ip, portu);
        zerbitzariAplikazioa.EntzutenHasi();
        zerbitzariAplikazioa.Itxi();

        Console.WriteLine("\nSakatu <ENTER> bukatzeko...");
        Console.Read();
        return 0;
    }

    private void EntzutenHasi()
    {
        try
        {
            this.server.Start();
            Console.WriteLine("Txat zerbitzaria martxan. Bezero konexioak itxaroten...");
            Console.WriteLine($"Gehienez {maxBezeroak} erabiltzaile konekta daitezke aldi berean.\n");

            while (true)
            {
                TcpClient socketcliente = this.server.AcceptTcpClient();

                if (bezeroak.Count < maxBezeroak)
                {
                    Task.Run(() => this.BezeroaKudeatu(socketcliente));
                }
                else
                {
                    try
                    {
                        NetworkStream stream = socketcliente.GetStream();
                        StreamWriter writer = new StreamWriter(stream);
                        writer.WriteLine("SISTEMA: Zerbitzaria beteta dago. Saiatu berriro geroago.");
                        writer.WriteLine("<EOF>");
                        writer.Flush();
                        socketcliente.Close();

                        Console.WriteLine("Konexioa ukatu: zerbitzaria beteta (15/15)");
                    }
                    catch (Exception ex)
                    {
                        Console.WriteLine($"Errorea ukapen mezua bidaltzean: {ex.Message}");
                    }
                }
            }
        }
        catch (Exception e)
        {
            Console.WriteLine("Socket edo buffer-a sortzen errorea: {0}", e);
        }
    }

    private async Task MezuaGuztiei(string mezua, TcpClient bidaltzailea = null)
    {
        List<Task> bidalketak = new List<Task>();

        foreach (var bezero in bezeroak.Keys)
        {
            try
            {
                if (bezero.Connected)
                {
                    NetworkStream stream = bezero.GetStream();
                    StreamWriter writer = new StreamWriter(stream);

                    await writer.WriteLineAsync(mezua);
                    await writer.WriteLineAsync("<EOF>");
                    await writer.FlushAsync();
                }
            }
            catch (Exception ex)
            {
                Console.WriteLine($"Errorea mezua bidaltzean: {ex.Message}");
            }
        }
    }

    private void BezeroaKudeatu(TcpClient socket)
    {
        NetworkStream stream = null;
        StreamWriter writer = null;
        StreamReader reader = null;
        string bezeroIzena = null;

        try
        {
            stream = socket.GetStream();
            writer = new StreamWriter(stream);
            reader = new StreamReader(stream);

            string lehenMezua = reader.ReadLine();
            if (lehenMezua != null && lehenMezua.Contains(":"))
            {
                bezeroIzena = lehenMezua.Split(':')[0];

                lock (blokeoa)
                {
                    if (bezeroak.Count >= maxBezeroak)
                    {
                        writer.WriteLine("Zerbitzaria beteta dago. Saiatu berriro geroago.");
                        writer.WriteLine("<EOF>");
                        writer.Flush();
                        throw new Exception("Zerbitzaria beteta");
                    }

                    bezeroak.TryAdd(socket, bezeroIzena);
                }

                Console.WriteLine($"+++ {bezeroIzena} konektatu da. Konektatuta: {bezeroak.Count}/{maxBezeroak}");

                Console.WriteLine(lehenMezua);
                MezuaGuztiei(lehenMezua, socket).Wait();
            }
            while (socket.Connected)
            {
                string data = string.Empty;

                while (!data.Contains("<EOF>"))
                {
                    string lerroa = reader.ReadLine();
                    if (lerroa == null)
                    {
                        throw new Exception("Konexioa itxi da");
                    }
                    data += lerroa;
                }

                string mezua = data.Replace("<EOF>", "").Trim();

                if (!string.IsNullOrEmpty(mezua))
                {
                    Console.WriteLine($"[{bezeroak.Count} konektatuta] {mezua}");
                    MezuaGuztiei(mezua, socket).Wait();
                }
            }
        }
        catch (Exception e)
        {
            if (e.Message != "Zerbitzaria beteta")
            {
                Console.WriteLine($"Akatsa {bezeroIzena}-(r)ekin: {e.Message}");
            }
        }
        finally
        {
            if (bezeroIzena != null)
            {
                lock (blokeoa)
                {
                    bezeroak.TryRemove(socket, out _);
                }

                string deskonexioMezua = $"SISTEMA: {bezeroIzena} deskonektatu da. ({bezeroak.Count}/{maxBezeroak})";
                MezuaGuztiei(deskonexioMezua, socket).Wait();

                Console.WriteLine($"--- {bezeroIzena} deskonektatu da. Konektatuta: {bezeroak.Count}/{maxBezeroak}");
            }

            writer?.Close();
            reader?.Close();
            stream?.Close();
            socket?.Close();
        }
    }

    private void Itxi()
    {
        try
        {
            foreach (var bezero in bezeroak.Keys)
            {
                bezero?.Close();
            }
            bezeroak.Clear();

            this.server.Stop();
            Console.WriteLine("Zerbitzaria bukatuta.");
        }
        catch (Exception e)
        {
            Console.WriteLine("Zerbitzaria ezin izan da geldit: {0}", e);
        }
    }
}