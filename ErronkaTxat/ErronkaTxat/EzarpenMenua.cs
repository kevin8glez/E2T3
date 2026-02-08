using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;
using System.Xml.Linq;
using static System.Windows.Forms.VisualStyles.VisualStyleElement;

namespace ErronkaTxat
{
    public partial class EzarpenMenua : Form
    {
        public EzarpenMenua()
        {
            InitializeComponent();
        }

        private void button1_Click(object sender, EventArgs e)
        {
            int portu = Int32.Parse(Portua.Text);

            string lekua = Path.Combine(Directory.GetParent(Application.StartupPath).Parent.Parent.FullName,"Lotura");
            if (!Directory.Exists(lekua))
            {
                Directory.CreateDirectory(lekua);
            }
            
            string izena = "lotura.txt";
            string path = Path.Combine(lekua, izena);

            if (File.Exists(path))
            {
                File.WriteAllText(path,"IP-a: " + IPa.Text + Environment.NewLine + "Portua: " + portu);
            }
            else
            {
                using (StreamWriter str = File.CreateText(path))
                {
                    str.WriteLine("IP-a: " + IPa.Text);
                    str.WriteLine("Portua : " + portu);
                    str.Flush();
                }
            }

            /*ZerbitzariLotura zerb = new ZerbitzariLotura();
            zerb.Konektatu(IPa.Text, portu);*/

            this.Close();
        }
    }
}