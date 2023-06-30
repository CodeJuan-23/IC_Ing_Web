
using ApiBasica.Models.DBEjemplo;

namespace ApiBasica.Models.RequestResponse

{
    public class PersonFilterResponse
    {

        public int TotalRegistros { get; set; } = 0;

        public List<Persona> Personas { get; set; } = new List<Persona>();


    }
}
