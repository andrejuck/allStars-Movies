using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using allStars.Movies.Backend.Models;
using allStars.Movies.Backend.Services;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace allStars.Movies.Backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ResultadoFinalController : ControllerBase
    {
        private readonly IResultadoFinalService _resultadoService;

        public ResultadoFinalController(IResultadoFinalService resultadoService)
        {
            _resultadoService = resultadoService;
        }

        [HttpPost]
        public ActionResult<string> SendMovies(List<FilmeSelecionadoModel> filmesSelecionados)
        {
            var filmesSelecionadosOrdenados = _resultadoService.ListarPorOrdemAlfabetica(filmesSelecionados);
            var listaConfrontos = _resultadoService.ListarConfrontos(filmesSelecionadosOrdenados);
            var resultadoConfrontos = _resultadoService.RealizarConfronto(listaConfrontos);
            _resultadoService.RealizarUltimasDisputas(ref listaConfrontos, ref resultadoConfrontos);

            return Ok(resultadoConfrontos.OrderByDescending(x => x.nota).ToList());
        }
    }
}