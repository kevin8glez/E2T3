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

        private async void sartuBotoia_Click(object sender, EventArgs e)
        {
            apiLotura api = new apiLotura();
            //bool ontzat = await api.lotura(erabTextBox.Text, pasahitzTextBox.Text);

            if (!await api.erabPasa(erabTextBox.Text, pasahitzTextBox.Text))
            {
                Oharra fr = new Oharra();
                fr.TestuaAldatuErab("idatziatko datuak");
                fr.TestuaAldatuPasa("okerrak dira");
                fr.Show();
                //return;
            }
            else
            {
                string karpetaPath = Path.Combine(Directory.GetParent(Application.StartupPath).Parent.Parent.FullName, "Lotura");
                string fitxPath = Path.Combine(karpetaPath, "lotura.txt");
                //string ip = "k", portu = "k";

                if (!File.Exists(fitxPath))
                {
                    Oharra fr = new Oharra();
                    fr.TestuaAldatuErab("Lotura-daturik gabe");
                    fr.TestuaAldatuPasa("Ezarpenetara jo");
                    fr.Show();
                    //return;
                }
                else
                {
                    try
                    {
                        string[] lerroak = File.ReadAllLines(fitxPath);

                        /*if (lerroak.Length < 2)
                        {
                            Oharra fr = new Oharra();
                            fr.TestuaAldatuErab("Ezarpenetara");
                            fr.TestuaAldatuPasa("jo");
                            fr.Show();
                            return;
                        }*/

                        string ip = lerroak[0].Split(':')[1].Trim();
                        string portu = lerroak[1].Split(':')[1].Trim();

                        //k

                        /*if (string.IsNullOrEmpty(ip) || string.IsNullOrEmpty(portu))
                        {
                            Oharra fr = new Oharra();
                            fr.TestuaAldatuErab("IP/portua");
                            fr.TestuaAldatuPasa("hutsik");
                            fr.Show();
                            return;
                        }*/

                        try
                        {
                            ZerbitzariLotura lot = new ZerbitzariLotura();
                            lot.Konektatu(ip, portu);

                            Txata tx = new Txata();
                            tx.Erabiltzailea(erabTextBox.Text);
                            tx.Show();
                            this.Hide();
                        }
                        catch
                        {
                            //k
                        }
                    }
                    catch (Exception ex)
                    {
                        Oharra fr = new Oharra();
                        fr.TestuaAldatuErab("Akatsa");
                        fr.TestuaAldatuPasa(ex.Message);
                        fr.Show();

                    }

                }
            }

                
        }

        public void sarErak()
        {
            this.Show();
        }

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
