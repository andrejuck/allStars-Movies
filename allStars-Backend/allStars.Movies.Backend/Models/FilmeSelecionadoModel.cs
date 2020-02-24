using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace allStars.Movies.Backend.Models
{
    public class FilmeSelecionadoModel
    {
        public string id { get; set; }
        public string titulo { get; set; }
        public int ano { get; set; }
        public decimal nota { get; set; }
    }
}
