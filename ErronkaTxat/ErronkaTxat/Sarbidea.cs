using ErronkaTxat;
using System;
using System.Net;

namespace erronkaTxat
{
    public partial class Sarbidea : Form
    {
        public Sarbidea()
        {
            InitializeComponent();
        }

        private void label2_Click(object sender, EventArgs e)
        {

        }

        private void textBox1_TextChanged(object sender, EventArgs e)
        {
            //k
        }

        private void sartuBotoia_Click(object sender, EventArgs e)
        {
            string erab = erabTextBox.Text;
            //ZerbitzariariBidali(erab,IPaLortu());
            ZerbitzariLotura zerbLot = new ZerbitzariLotura(erab);
        }

        private void Sarbidea_Load(object sender, EventArgs e)
        {

        }

        /*private IPAddress IPaLortu()
        {
            IPHostEntry infoHost = Dns.GetHostEntry(Dns.GetHostName());
            IPAddress ipHelb = infoHost.AddressList[1];
            //Console.WriteLine("Ordenagailu honen IP helbidea: {0}", ipAddress);
            return ipHelb;
        }*/

        /*private void ZerbitzariariBidali(string erab, IPAddress ipa)
        {
            //k
        }*/

        /*
            // Gure ordenagailuaren IP helbidea lortzen du.
            infoHost = Dns.GetHostEntry(Dns.GetHostName());
            // 1 posizioan dagoena hartzen dut bi sare txartel dauzkadalako, bestela erabili 0.
            ipAddress = infoHost.AddressList[1];
            Console.WriteLine("Ordenagailu honen IP helbidea: {0}", ipAddress);
        */
    }
}
