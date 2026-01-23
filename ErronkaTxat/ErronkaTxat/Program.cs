using System;
using System.Windows.Forms;

namespace erronkaTxat
{
    internal static class Program
    {
        [STAThread]
        static void Main()
        {
            ApplicationConfiguration.Initialize();
            Application.Run(new Sarbidea());
        }
    }
}