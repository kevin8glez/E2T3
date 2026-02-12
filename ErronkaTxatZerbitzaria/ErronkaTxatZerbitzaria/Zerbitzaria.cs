using System;
using System.IO;
using System.Net;
using System.Net.Sockets;
using System.Text;
using static System.Runtime.InteropServices.JavaScript.JSType;

class Zerbitzaria
{
    // Klasearen atributuak.

    // Socket Listener.
    TcpListener server;


    // Eraikitzaile hutsa.
    public Zerbitzaria(IPAddress ip, int port)
    {
        // TcpListener objektua sortzen dugu.
        this.server = new TcpListener(ip, port);
    }

    public static int Main(string[] args)
    {
        // Zerbitzariaren portu-zenbakia eta IP helbidea.
        int portu = 13000;

        IPHostEntry infoHost = Dns.GetHostEntry(Dns.GetHostName());
        IPAddress ip = infoHost.AddressList[1];

        //IPAddress ip = IPAddress.Parse("127.0.0.1");
        // Guk definitutako klasearen objektua sortu.
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
            // Sistema Eragileari esaten diogu protu-zenbaki horretara heltzen diren paketeak gure aplikaziora bidali behar dituela.
            this.server.Start();
            Console.WriteLine("Bezero konexioak itxaroten...");
            // Bukle infinitu bat hainbat bezeroen eskaerak erantzun ahal izateko.
            int bezeroZenbakia = 0;
            while (bezeroZenbakia<=15)
            {
                // Bezero baten konexio eskaera itxaroten gelditzen da.
                TcpClient socketcliente = this.server.AcceptTcpClient();
                bezeroZenbakia++;
                // Kudeatu bezeroaren eskaera hari ezberdin baten, horrela hurrengo bezero baten konexioa kudeatu ahalko da.
                Task.Run(() => this.BezeroaKudeatu(socketcliente));

                // Thread.Sleep(100);
            }
        }
        catch (Exception e)
        {
            Console.WriteLine("Socket edo buffer-a sortzen errorea: {0}", e);
        }
    }

    /**
     * Bezerotik jasotako informazioa irakurri <EOF> jaso arte.
     * Ondoren, bezeroari jasotako mezua letra larriekin bueltatu.
     */
    private void BezeroaKudeatu(TcpClient socket)
    {
        // Stream-a ateratzen dugu.
        NetworkStream stream = socket.GetStream();
        // StreamReader eta StreamWriter objektuak datuak era eroso baten bidaltzen usten digu, Kontsolatik idazten egongo bagenu bezala.
        StreamWriter writer = new StreamWriter(stream);
        StreamReader reader = new StreamReader(stream);

        // Bezeroak bidalitako informazioa hemen gortzen joango gara.
        string data = string.Empty;
        try
        {
            // <EOF> jasotzen ez dugun bitartean, datuak irakurri.
            while (!data.Contains("<EOF>"))
            {
                // Gehitu irakurritako informazioa data aldagaiara.
                // KONTUZ: lerro BLOKEANTE bat, datuak jaso arte hemen gelditzen da exekuzioa.
                data += reader.ReadLine();
            }

            writer.WriteLine(data);
            writer.Flush();
        }
        catch (Exception e)
        {
            Console.WriteLine("Komunikazio errorea: {0}", e);
        }

        writer.Close();
        reader.Close();
        stream.Close();

        // NORBAIT KONEKTATZEAN BERE IZENA HARTU TA "... KONEKTATU DA" TXATEAN IDATZI, DESKONEKTATZEAN BERDIN
        //Console.WriteLine("Bezero-" + bezeroZenbakia + " konexioa itxita.");
    }

    /**
     * Irekitako konexio objektuak itxi.
     */
    private void Itxi()
    {
        try
        {
            this.server.Stop();
            Console.WriteLine("Zerbitzaria bukatuta.");
        }
        catch (Exception e)
        {
            Console.WriteLine("Zerbitzaria ezin izan da geldit: {0}", e);
        }
    }
}