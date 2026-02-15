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
        public Txata(ZerbitzariLotura lot)
        {
            InitializeComponent();
            zerb = lot;
        }

        public Txata(ZerbitzariLotura lot, Sarbidea sarb)
        {
            InitializeComponent();
            zerb = lot;
            sar = sarb;
        }

        private void gureMezua_TextChanged(object sender, EventArgs e)
        {
            //k
        }

        public void Erabiltzailea(string erab)
        {
            //this.erabiltzailea.Text = erab;
            erabiltzailea.Text = erab;
        }

        private void TxataItxi(object sender, EventArgs e)
        {
            zerb.Itxi();
            this.Close();
            sar.sarErak();
        }

        public async Task txataEguneratu(string mezua)
        {
            string erantzuna = await Task.Run(() => zerb.ErakutsiErantzuna());

            if (!string.IsNullOrWhiteSpace(erantzuna))
            {
                if (this.InvokeRequired)
                {
                    this.Invoke(new Action(() => {
                        txatPanela.Items.Add(erantzuna);
                    }));
                }
                else
                {
                    txatPanela.Items.Add(erantzuna);
                }
            }
            //this.txatPanela.Items.Clear();
            //this.txatPanela.Items.Add(zerb.ErakutsiErantzuna());
            //txatPanela.Items.Add(/*await */zerb.ErakutsiErantzuna());
        }

        private async void bidaliBotoia_Click(object sender, EventArgs e)
        {
            zerb.BidaliDatuak(erabiltzailea.Text, gureMezua.Text);
            //txatPanela.Items.Add($"{erabiltzailea.Text}: {gureMezua.Text}");
            await txataEguneratu(gureMezua.Text);
            gureMezua.ResetText();
        }
    }
}
