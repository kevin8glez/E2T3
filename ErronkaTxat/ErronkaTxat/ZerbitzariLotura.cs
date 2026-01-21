using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Sockets;
using System.Text;
using System.Threading.Tasks;

namespace ErronkaTxat
{
    internal class ZerbitzariLotura(string erab)
    {
        // Klasearen atributuak.

        // Bezero socket-a.
        TcpClient client = null;

        // Stream bat bit puntuen arteko datu-fluxu bat da, eta tenporalki buffer batean biltegiratzen dira (fitxategi bat balitz bezala).
        // Idazketa-eragiketak (jatorrizko puntuaren aldetik) eta irakurketa-eragiketak (jatorrizko puntuan) tartekatzeko aukera ematen du.
        NetworkStream str = null;

        // StreamReader eta StreamWriter objektuak datuak era eroso baten bidaltzen usten digu, Kontsolatik idazten egongo bagenu bezala.
        StreamReader sr = null;
        StreamWriter sw = null;

        /**
         * Eraikitzailea.
         */
        public void TCPClient()
        {

        }

        /**
         * Konektatu emandako ip helbide eta portu-zenbakia daukan zerbitzarira.
         */
        private void Konektatu(String server, Int32 port)
        {
            try
            {
                // Bezero socket-a sortu. Hemen konexioa irekitzen da ere bai.
                this.client = new TcpClient(server, port);
                // Stream-a ateratzen dugu.
                this.str = this.client.GetStream();
                // StreamReader eta StreamWriter objektuak datuak era eroso baten bidaltzen usten digu, Kontsolatik idazten egongo bagenu bezala.
                this.sr = new StreamReader(this.str);
                this.sw = new StreamWriter(this.str);

            }
            catch (Exception e)
            {
                Console.WriteLine("Socket edo buffer-a sortzen errorea: {0}", e);
            }
        }

        /**
         * Bidali zerbitzariari kontsolan irakurritako esaldia letra larrietara bihur dezan.
         */
        private void BidaliDatuak()
        {
            try
            {
                // Irakurri kontsolatik esaldia.
                Console.WriteLine("Letra larrietara bihurtu nahi duzun testua idatzi:");
                string mezua = Txata.KKK();
                // Bidali esaldia saretik zehar sortutako socket-a erabilita.
                this.sw.WriteLine(mezua);
                // Bidali <EOF> mezua zerbitzariari bidalketa bukatu duela adierazteko.
                this.sw.WriteLine("<EOF>");
                // Ez ahaztu buffer-a husteaz!
                this.sw.Flush();

            }
            catch (Exception e)
            {
                Console.WriteLine("Error envio de datos: {0}", e);
            }
        }

        /**
         * Irakurri zerbitzariak bidalitako erantzuna eta erakutsi kontsolatik.
         */
        private void ErakutsiErantzuna()
        {
            try
            {
                // Zerbitzariak bidalitako informazioa hemen gortzen joango gara.
                string data = string.Empty;
                // <EOF> jasotzen ez dugun bitartean, datuak irakurri.
                while (!data.Contains("<EOF>"))
                {
                    // Gehitu irakurritako informazioa data aldagaiara.
                    data += sr.ReadLine();
                }
                // Kontsolatik erakutsi jasotako esaldia zer gertatzen ari den ikusteko.
                Console.WriteLine(data);
            }
            catch (Exception e)
            {
                Console.WriteLine("Datuak jasotzerakoan errorea: {0}", e);
            }
        }

        /**
         * Itxi konexio danak.
         */
        private void Itxi()
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

        /**
         * Main metodoa, programa hemen hasten da.
         */
        public static int Main(String[] args)
        {
            // Zerbitzariarekin komunikatzeko behar diren datuak: IP helbidea eta portu-zenbakia.
            string zerbitzariIPa = "127.0.0.1";
            Int32 port = 13000;
            // Guk definitutako klasearen objektua sortu.
            TCPClient bezeroAplikazioa = new TCPClient();
            // Konektatu zerbitzarira.
            bezeroAplikazioa.Konektatu(zerbitzariIPa, port);
            // Bidali datuak zerbitzarira.
            bezeroAplikazioa.BidaliDatuak();
            // Jasotako erantzuna kudeatu.
            bezeroAplikazioa.ErakutsiErantzuna();
            // Itxi konexio danak.
            bezeroAplikazioa.Itxi();

            Console.WriteLine("\nSakatu <ENTER> bukatzeko...");
            Console.Read();
            return 0;
        }
    }
}
