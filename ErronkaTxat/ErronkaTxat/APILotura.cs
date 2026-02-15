using Newtonsoft.Json.Linq;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Text;
using System.Text.Json;
using System.Threading.Tasks;
using static System.Net.WebRequestMethods;

namespace ErronkaTxat
{
    internal class apiLotura
    {
        public async Task<bool> erabPasa(string erab,string pasa)
        {
            /*if (string.IsNullOrEmpty(erab) || string.IsNullOrEmpty(pasa))
            {
                return false;
            }*/

            try
            {
                HttpClient bezeroa = new HttpClient();
                string helbidea = $"http://ec2-54-196-47-191.compute-1.amazonaws.com:8081/api/users?username={Uri.EscapeDataString(erab)}&pasahitza={Uri.EscapeDataString(pasa)}";
                using (HttpResponseMessage erantzuna = await bezeroa.GetAsync(helbidea))
                {
                    Oharra fr = new Oharra();
                    fr.TestuaAldatuErab($"HTTP Egoera: {(int)erantzuna.StatusCode} - {erantzuna.StatusCode}");
                    string edukia = await erantzuna.Content.ReadAsStringAsync();
                    fr.TestuaAldatuPasa($"Erantzunaren edukia: {edukia}");
                    fr.Show();

                    if (erantzuna.StatusCode == System.Net.HttpStatusCode.OK)
                    {
                        JArray jsonArray = JArray.Parse(edukia);

                        bool erabDago = false;

                        foreach (var erabiltzailea in jsonArray)
                        {
                            string unekoErab = erabiltzailea["username"]?.ToString();
                            string unekoPasa = erabiltzailea["pasahitza"]?.ToString();

                            if (unekoErab == erab && unekoPasa == pasa)
                            {
                                erabDago = true;
                                break;
                            }
                        }

                        return erabDago;
                    }
                    else
                    {
                        return false;
                    }
                }
            }
            /*catch (HttpRequestException ex)
            {
                Oharra fr = new Oharra();
                fr.TestuaAldatuErab("AKATSA. Mezua :{0} ");
                fr.TestuaAldatuPasa(ex.Message);
                fr.Show();
                return false;
            }*/
            catch (Exception ex)
            {
                Oharra fr = new Oharra();
                fr.TestuaAldatuErab($"Espero gabeko errorea: {ex.Message}");
                fr.Show();
                return false;
            }
        }

        public class Erabiltzailea
        {
            public int id { get; set; }
            public string username { get; set; }
            public string password { get; set; }
            public string email { get; set; }
            public string role { get; set; }
            public object student { get; set; }
        }
    }
}
