using ErronkaTxat;
using System;
using System.IO;
using System.Net;

namespace erronkaTxat
{
    public partial class Sarbidea : Form
    {
        public Sarbidea()
        {
            InitializeComponent();
        }

        /*private void label2_Click(object sender, EventArgs e)
        {

        }

        private void textBox1_TextChanged(object sender, EventArgs e)
        {
            //k
        }*/

        private void sartuBotoia_Click(object sender, EventArgs e)
        {
            /*apiLotura api = new apiLotura();
            api.erabZiur(erabTextBox.Text);
            api.pasaZiur(pasahitzTextBox.Text);*/

            string karpetaPath = Path.Combine(Directory.GetParent(Application.StartupPath).Parent.Parent.FullName, "Lotura");
            string fitxPath = Path.Combine(karpetaPath, "lotura.txt");
            string ip = "k", portu = "k";

            if (!File.Exists(fitxPath))
            {
                Oharra fr = new Oharra();
                fr.TestuaAldatuErab("Lotura-daturik gabe");
                fr.TestuaAldatuPasa("Ezarpenetara jo");
                fr.Show();
            }
            else
            {
                try
                {
                    string[] lerroak = File.ReadAllLines(fitxPath);

                    ip = lerroak[0].Split(':')[1].Trim();
                    portu = lerroak[1].Split(':')[1].Trim();

                    //k

                }
                catch
                {
                    Oharra fr = new Oharra();
                    fr.TestuaAldatuErab("Ezarpenetara jo");
                }

                ZerbitzariLotura lot = new ZerbitzariLotura();
                lot.Konektatu(ip, portu);

                Txata tx = new Txata();
                tx.Erabiltzailea(erabTextBox.Text);
                tx.Show();
                this.Hide();
            }
        }

        public void sarErak()
        {
            this.Show();
        }

        /*private void Sarbidea_Load(object sender, EventArgs e)
        {

        }

        private void button1_Click(object sender, EventArgs e)
        {

        }*/

        private void EzarpenBotoia_LinkClicked(object sender, LinkLabelLinkClickedEventArgs e)
        {
            EzarpenMenua ezMen = new EzarpenMenua();
            ezMen.ShowDialog();
        }

        /*private void erabiltzaileEtiketa_Click(object sender, EventArgs e)
        {

        }*/

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
