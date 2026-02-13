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
            Boolean egiaztapena = false;
            try{
                string helbidea = $"http://ec2-50-16-5-100.compute-1.amazonaws.com:8081/api/users?username={Uri.EscapeDataString(erab)}&pasahitza={Uri.EscapeDataString(pasa)}";
                HttpClient bezeroa = new HttpClient();
                using (HttpResponseMessage erantzuna = await bezeroa.GetAsync(helbidea))
                {
                    if (erantzuna.StatusCode == System.Net.HttpStatusCode.OK)
                    {
                        //string erabAPI = await erantzuna.Content.ReadAsStringAsync();
                        //k
                        egiaztapena = true;
                        return egiaztapena;
                    }
                }
            }
            catch (HttpRequestException ex)
            {
                Console.WriteLine("AKATSA. Mezua :{0} ", ex.Message);
                return egiaztapena;
            }
            return egiaztapena;
        }
    }
}
