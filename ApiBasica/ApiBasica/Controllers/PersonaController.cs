using ApiBasica.Models.DBEjemplo;
using ApiBasica.Models.RequestResponse;
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

        [HttpPost]  //crear nuevo registro

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

        [HttpPost("filter")]
        public IActionResult Filtrar([FromBody] PersonFilterRequest request)
        {
            PersonFilterResponse res = new PersonFilterResponse();
            // LISTA DE PERSONAS POR COINCIDENCIAS



           //BASE DE FILTRO

           /*  List<Persona> personasTotal = db.Personas.ToList();
               List<Persona> personas = db.Personas.Where(x =>
                 x.Dni.Contains(request.Dni)// ==> contains equivalente like
                 //ToLower() ==>para transformar el texto todo en minuscula
                 || string.Concat(x.Nombre, "", x.ApPaterno, "", x.ApMaterno).ToLower()
                  .Contains(request.NombreCompleto.ToLower())).ToList();
           
              res.TotalRegistros = personasTotal.Count;
              res.Personas = personas;

            */
           var query = db.Personas.Where(x => x.Id == x.Id);

           if( !string.IsNullOrEmpty(request.Dni))
            {
                query = query.Where(x => x.Dni.Contains(request.Dni));
            }

            if (!string.IsNullOrEmpty(request.NombreCompleto))
            {
                query = query.Where(x =>
                string.Concat(x.Nombre, "", x.ApPaterno, "", x.ApMaterno).ToLower()
                .Contains(request.NombreCompleto.ToLower())
                );
            }

            List<Persona> lst = query
                .Skip((request.Pagina - 1) * request.Cantidad) //paginado correspondiente
                .Take(request.Cantidad) // top 1
                .ToList();


            res.TotalRegistros = query.Count();
            res.Personas = lst;


            return Ok(res);
        }

        
        [HttpPut]  //actualizar nuevo registro

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

        [HttpDelete("{id}")]  //eliminar el registro

        public IActionResult EliminarPorId(int id)
        {
            Persona persona = db.Personas.Find(id);

            db.Personas.Remove(persona);
            db.SaveChanges();

            return Ok(persona);
        }

    }
}
