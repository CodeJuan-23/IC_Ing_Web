namespace ApiBasica.Models.RequestResponse
{
    public class PersonFilterRequest
    {
        public string Dni { get; set; } = "";
        public string NombreCompleto { get; set; } = "";
        public int Pagina { get; set; } = 1;
        public int Cantidad { get; set; } = 5;

        //estandar visual studio 2015/2017  hacia abajo
        // public PersonFilterRequest()
        // {
        //    Dni = "";
        //    NombreCompleto = "";
        //    Pagina = 1;
        //    Cantidad = 5;
        // }
    }
}
