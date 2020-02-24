using allStars.Movies.Backend.Models;
using allStars.Movies.Backend.Services;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using System.Collections.Generic;

namespace allStars.Tests
{
    [TestClass]
    public class ResultadoFinalTest
    {
        private readonly IResultadoFinalService _service;

        public ResultadoFinalTest()
        {
            _service = new ResultadoFinalService();

        }

        [TestMethod]
        public void TesteOrdenacaoFilmesSelecionados()
        {
            var listaFilmesSelecionados = ListaTeste();

            var retorno = _service.ListarPorOrdemAlfabetica(listaFilmesSelecionados);

            Assert.IsTrue(retorno[0].titulo == "Deadpool 2");
            Assert.IsTrue(retorno[7].titulo == "Vingadores: Guerra Infinita");
        }

        [TestMethod]
        public void PrimeiraDisputaAteVencedorTeste()
        {
            var listaFilmes = ListaTeste();

            var listarOrdenada = _service.ListarPorOrdemAlfabetica(listaFilmes);

            var confrontos = _service.ListarConfrontos(listarOrdenada);
            var filmes = _service.RealizarConfronto(confrontos);

            Assert.IsTrue(filmes.Count == 4);
            Assert.IsTrue(filmes[0].titulo == "Vingadores: Guerra Infinita");
            Assert.IsTrue(filmes[1].titulo == "Thor: Ragnarok");
            Assert.IsTrue(filmes[2].titulo == "Os Incríveis 2");
            Assert.IsTrue(filmes[3].titulo == "Jurassic World: Reino Ameaçado");

            _service.RealizarUltimasDisputas(ref confrontos, ref filmes);

            Assert.IsTrue(filmes.Count == 2);
            Assert.IsTrue(filmes[0].titulo == "Vingadores: Guerra Infinita");
            Assert.IsTrue(filmes[1].titulo == "Os Incríveis 2");
        }

        private static List<FilmeSelecionadoModel> ListaTeste()
        {
            return new List<FilmeSelecionadoModel>()
            {
                new FilmeSelecionadoModel() { titulo = "Os Incríveis 2", id = "tt3606756", ano = 2018, nota = 8.5M },
                new FilmeSelecionadoModel() { titulo = "Jurassic World: Reino Ameaçado", id = "tt4881806", ano = 2018, nota = 6.7M },
                new FilmeSelecionadoModel() { titulo = "Oito Mulheres e um Segredo", id = "tt5164214", ano = 2018, nota = 6.3M },
                new FilmeSelecionadoModel() { titulo = "Hereditário", id = "tt7784604", ano = 2018, nota = 6.3M },
                new FilmeSelecionadoModel() { titulo = "Vingadores: Guerra Infinita", id = "tt4154756", ano = 2018, nota = 8.8M },
                new FilmeSelecionadoModel() { titulo = "Deadpool 2", id = "tt5463162", ano = 2018, nota = 8.1M },
                new FilmeSelecionadoModel() { titulo = "Han Solo: Uma História Star Wars", id = "tt3778644", ano = 2018, nota = 7.2M },
                new FilmeSelecionadoModel() { titulo = "Thor: Ragnarok", id = "tt3501632", ano = 2017, nota = 7.9M }
            };
        }
    }
}
