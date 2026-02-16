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

            if (!await api.erabPasa(erabTextBox.Text, pasahitzTextBox.Text))
            {
                MessageBox.Show("Idatzitako datuak okerrak dira", "Akatsa", MessageBoxButtons.OK, MessageBoxIcon.Error);
            }
            else
            {
                string karpetaPath = Path.Combine(Directory.GetParent(Application.StartupPath).Parent.Parent.FullName, "Lotura");
                string fitxPath = Path.Combine(karpetaPath, "lotura.txt");

                if (!File.Exists(fitxPath))
                {
                    MessageBox.Show("Lotura-daturik gabe, ezarpenetara jo", "Akatsa", MessageBoxButtons.OK, MessageBoxIcon.Error);
                }
                else
                {
                    try
                    {
                        string[] lerroak = File.ReadAllLines(fitxPath);
                        string ip = lerroak[0].Split(':')[1].Trim();
                        string portu = lerroak[1].Split(':')[1].Trim();

                        try
                        {
                            ZerbitzariLotura lot = new ZerbitzariLotura();
                            lot.Konektatu(ip,portu);

                            if (lot.KonexioOndo())
                            {
                                //MessageBox.Show("Lotura eginda", "Ondo", MessageBoxButtons.OK);
                                Txata tx = new Txata(lot, this);
                                tx.Erabiltzailea(erabTextBox.Text);
                                tx.Show();
                                this.Hide();
                            }
                            else
                            {
                                MessageBox.Show("Konexioak huts egin du", "Akatsa", MessageBoxButtons.OK, MessageBoxIcon.Error);
                            }
                        }
                        catch(Exception ex)
                        {
                            MessageBox.Show("Ezin izan da zerbitzarira konektatu. Egiaztatu konexioa eta berriz saiatu.\n\nErrorea: " + ex.Message,"Akatsa",MessageBoxButtons.OK,MessageBoxIcon.Error);
                        }
                    }
                    catch (Exception ex)
                    {
                        MessageBox.Show(ex.Message, "Akatsa", MessageBoxButtons.OK, MessageBoxIcon.Error);
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
    }
}
