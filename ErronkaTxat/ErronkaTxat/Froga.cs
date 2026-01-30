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
    public partial class Froga : Form
    {
        public Froga()
        {
            InitializeComponent();
        }

        private void textBox1_TextChanged(object sender, EventArgs e)
        {
            //k
        }

        public void TestuaAldatuErab(string dat)
        {
            label1.Text = dat;
        }

        public void TestuaAldatuPasa(string dat)
        {
            label2.Text = dat;
        }
    }
}
