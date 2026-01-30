using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ErronkaTxat
{
    internal class apiLotura()
    {
        Froga fr = new Froga();

        public void erabZiur(string erab)
        {
            fr.Show();
            fr.TestuaAldatuErab(erab);
        }

        public void pasaZiur(string pasa)
        {
            fr.Show();
            fr.TestuaAldatuPasa(pasa);
        }
    }
}
