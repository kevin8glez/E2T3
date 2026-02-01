using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;
using static System.Windows.Forms.VisualStyles.VisualStyleElement;

namespace ErronkaTxat
{
    public partial class EzarpenMenua : Form
    {
        public EzarpenMenua()
        {
            InitializeComponent();
        }

        private void EzarpenMenua_Load(object sender, EventArgs e)
        {

        }

        private void button1_Click(object sender, EventArgs e)
        {
            int portu = Int32.Parse(Portua.Text);
            ZerbitzariLotura zerb = new ZerbitzariLotura();
            zerb.Konektatu(IPa.Text, portu);
        }
    }
}
