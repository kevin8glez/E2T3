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
            try
            {
                HttpClient bezeroa = new HttpClient();
                string helbidea = $"http://ec2-34-207-179-22.compute-1.amazonaws.com:8081/api/users?username={Uri.EscapeDataString(erab)}&pasahitza={Uri.EscapeDataString(pasa)}";
                using (HttpResponseMessage erantzuna = await bezeroa.GetAsync(helbidea))
                {
                    string edukia = await erantzuna.Content.ReadAsStringAsync();

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
            catch (Exception ex)
            {
                MessageBox.Show(ex.Message, "Akatsa", MessageBoxButtons.OK, MessageBoxIcon.Error);
                return false;
            }
        }
    }
}
