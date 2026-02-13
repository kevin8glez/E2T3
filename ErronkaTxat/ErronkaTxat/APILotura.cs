using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ErronkaTxat
{
    internal class apiLotura()
    {
        Oharra fr = new Oharra();

        public async Task<bool> lotura(string erab,string pasa)
        {
            if (string.IsNullOrEmpty(erab) || string.IsNullOrEmpty(pasa))
            {
                return false;
            }

            try
            {
                string helbidea = $"http://ec2-50-16-5-100.compute-1.amazonaws.com:8081/api/users?username={Uri.EscapeDataString(erab)}&pasahitza={Uri.EscapeDataString(pasa)}";
                HttpClient bezeroa = new HttpClient();
                using (HttpResponseMessage erantzuna = await bezeroa.GetAsync(helbidea))
                {
                    return erantzuna.StatusCode == System.Net.HttpStatusCode.OK;
                }
            }
            catch (HttpRequestException ex)
            {
                Console.WriteLine("AKATSA. Mezua :{0} ", ex.Message);
                return false;
            }
        }
    }
}
