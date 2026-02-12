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

        public Boolean apira(string erab, string pasa)
        {
            //k
            //string datuakApi = lotura();
            return K; //bool izan behar da
        }

        public async Task lotura()
        {
            try{
                HttpClient bezeroa = new HttpClient();
                using (HttpResponseMessage erantzuna = await bezeroa.GetAsync("https://api.adibidea.eus/bidalariak?izena=jon&adina=30"))
                {
                    if (erantzuna.StatusCode == System.Net.HttpStatusCode.OK)
                    {
                        string erabAPI = await erantzuna.Content.ReadAsStringAsync();
                        //k
                    }
                }
            }
            catch (HttpRequestException ex)
            {
                Console.WriteLine("AKATSA. Mezua :{0} ", ex.Message);
            }

        }
    }
}
