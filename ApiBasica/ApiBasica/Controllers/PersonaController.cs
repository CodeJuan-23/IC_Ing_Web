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

        [HttpGet("{id}")]

        public IActionResult ObtenerPorId(int id)
        {
         Persona persona = db.Personas.Find(id);
         return Ok(persona);
        }

        [HttpPost]

        public IActionResult Crear([FromBody] Persona request)
        {
            /* 
            db.Personas.Add(request); ==> MOTOR DE BASE DE 	  
            DATOS, SOLO ESCRIBIMOS NUESTRO INSERT INTO
            */

        db.Personas.Add(request);

        /* 
            db.SaveChanges(); ==> SQL SERVER ==> f5 	  
                              ==> MYSQL ==> CTRL + ENTER	 
                             EJECUTA LA SENTENCIA ESCRITA	
       */

        db.SaveChanges();

        return Ok(request);
        }

        [HttpPut]

        public IActionResult Actualizar([FromBody] Persona request)
        {
            /* 
            db.Personas.Add(request); ==> MOTOR DE BASE DE 	  
            DATOS, SOLO ESCRIBIMOS NUESTRO INSERT INTO
            */

            db.Personas.Update(request);

            /* 
              db.SaveChanges(); ==> SQL SERVER ==> f5 	  
                                ==> MYSQL ==> CTRL + ENTER	 
                              EJECUTA LA SENTENCIA ESCRITA	
           */

            db.SaveChanges();

            return Ok(request);
        }

        [HttpDelete("{id}")]

        public IActionResult EliminarPorId(int id)
        {
            Persona persona = db.Personas.Find(id);

            db.Personas.Remove(persona);
            db.SaveChanges();

            return Ok(persona);
        }

    }
}
