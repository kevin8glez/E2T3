using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Net.Sockets;
using System.Text;
using System.Threading.Tasks;

namespace ErronkaTxat
{
    public class ZerbitzariLotura
    {
        TcpClient client;
        NetworkStream str;
        StreamReader sr;
        StreamWriter sw;

        public ZerbitzariLotura(){}

        public void Konektatu(String ip, string portu)
        {
            try
            {
                int portua = Int32.Parse(portu);
                this.client = new TcpClient(ip, portua);

                this.str = this.client.GetStream();
                this.sr = new StreamReader(this.str);
                this.sw = new StreamWriter(this.str);

            }
            catch (Exception e)
            {
                Console.WriteLine("Socket edo buffer-a sortzen errorea: {0}", e);
            }
        }

        public bool KonexioOndo()
        {
            return client != null && client.Connected && sw != null && sr != null;
        }

        public void BidaliDatuak(string erab, string mezua)
        {
            try
            {
                string erabMezu = $"{erab}: {mezua}";
                this.sw.WriteLine(erabMezu);
                this.sw.WriteLine("<EOF>");
                this.sw.Flush();

            }
            catch (Exception e)
            {
                Console.WriteLine("Akatsa: {0}", e);
            }
        }

        public string ErakutsiErantzuna()
        {
            try
            {
                if (sr == null) return "";
                string mezua = string.Empty;
                int kont = 0;
                while (!mezua.Contains("<EOF>") && kont < 50)
                {
                    if (sr.Peek() >= 0)
                    {
                        string lerroa = sr.ReadLine();
                        if (lerroa != null)
                        {
                            mezua += lerroa;
                        }
                    }
                    else
                    {
                        System.Threading.Thread.Sleep(100);
                        kont++;
                    }
                }

                Console.WriteLine(mezua);
                string garbia = mezua.Replace("<EOF>", "").Trim();

                return garbia;
            }
            catch (Exception e)
            {
                Console.WriteLine("Datuak jasotzerakoan errorea: {0}", e);
                return "";
            }
        }

        public void Itxi()
        {
            try
            {
                this.sr.Close();
                this.sw.Close();
                this.str.Close();
                this.client.Close();
                Console.WriteLine("Konexioak itxi dira.");
            }
            catch (Exception e)
            {
                Console.WriteLine("Konexioak ezin izan dira itxi: {0}", e);
            }
        }
    }
}