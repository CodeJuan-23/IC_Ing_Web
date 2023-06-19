using ApiBasica.Models.DBEjemplo;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace ApiBasica.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PersonaController : ControllerBase
    {
        /* DECLARACION DE VARIABLES GENERALES */
        Bd01Context db = new Bd01Context();

        [HttpGet]
        public IActionResult ListarTodo()
        {
          List<Persona> personas = db.Personas.ToList();
            return Ok(personas);
        }

    }
}
