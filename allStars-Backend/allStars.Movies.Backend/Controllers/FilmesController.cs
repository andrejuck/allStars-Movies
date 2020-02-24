using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace allStars.Movies.Backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class FilmesController : ControllerBase
    {
        // GET api/values
        [HttpGet]
        public ActionResult<IEnumerable<string>> Get()
        {
            var filmes = new List<object>()
            {
                new {id = "tt3606756", titulo = "Os Incríveis 2", ano = 2018, nota = 8.5 },
                new {id = "tt4881806", titulo = "Jurassic World: Reino Ameaçado", ano = 2018, nota = 6.7 },
                new {id = "tt5164214", titulo = "Oito Mulheres e um Segredo", ano = 2018, nota = 6.3 },
                new {id = "tt7784604", titulo = "Hereditário", ano = 2018, nota = 7.8 },
                new {id = "tt4154756", titulo = "Vingadores: Guerra Infinita", ano = 2018, nota = 8.8 },
                new {id = "tt5463162", titulo = "Deadpool 2", ano = 2018,nota =  8.1 },
                new {id = "tt3778644", titulo = "Han Solo: Uma História Star Wars", ano = 2018, nota = 7.2 },
                new {id = "tt3501632", titulo = "Thor: Ragnarok", ano = 2017, nota = 7.9 },
                new {id = "tt2854926", titulo = "Te Peguei!", ano = 2018, nota = 7.1 },
                new {id = "tt0317705", titulo = "Os Incríveis", ano = 2004, nota = 8.0 },
                new {id = "tt3799232", titulo = "A Barraca do Beijo", ano = 2018, nota = 6.4 },
                new {id = "tt1365519", titulo = "Tomb Raider: A Origem", ano = 2018,nota =  6.5 },
                new {id = "tt1825683", titulo = "Pantera Negra", ano = 2018, nota = 7.5 },
                new {id = "tt5834262", titulo = "Hotel Artemis", ano = 2018, nota = 6.3},
                new {id = "tt7690670", titulo = "Superfly", ano = 2018, nota = 5.1 },
                new {id = "tt6499752", titulo = "Upgrade", ano = 2018, nota = 7.8 }
            };

            return new JsonResult(filmes);
        }
    }
}