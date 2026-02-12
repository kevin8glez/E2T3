using erronkaTxat;
using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace ErronkaTxat
{
    public partial class Txata : Form
    {
        private Sarbidea sar;
        private ZerbitzariLotura zerb;
        public Txata()
        {
            InitializeComponent();
        }

        private void gureMezua_TextChanged(object sender, EventArgs e)
        {
            //k
        }

        public void Erabiltzailea(string erab)
        {
            this.erabiltzailea.Text = erab;
        }

        private void TxataItxi(object sender, EventArgs e)
        {
            zerb.Itxi();
            this.Close();
            sar.sarErak();
        }

        public void txataEguneratu(string mezua)
        {
            //this.txatPanela.Items.Clear();
            this.txatPanela.Items.Add(mezua);
        }

        private void bidaliBotoia_Click(object sender, EventArgs e)
        {
            zerb.BidaliDatuak(erabiltzailea.Text, gureMezua.Text);
            gureMezua.ResetText();
        }
    }
}
