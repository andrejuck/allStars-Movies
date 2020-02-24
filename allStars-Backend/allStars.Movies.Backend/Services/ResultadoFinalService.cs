using allStars.Movies.Backend.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace allStars.Movies.Backend.Services
{
    public interface IResultadoFinalService
    {
        List<FilmeSelecionadoModel> ListarPorOrdemAlfabetica(List<FilmeSelecionadoModel> lista);
        Dictionary<FilmeSelecionadoModel, FilmeSelecionadoModel> ListarConfrontos(List<FilmeSelecionadoModel> filmesSelecionadosOrdenados);
        Dictionary<FilmeSelecionadoModel, FilmeSelecionadoModel> ListarConfrontosPorChave(List<FilmeSelecionadoModel> resultadoConfrontos);
        List<FilmeSelecionadoModel> RealizarConfronto(Dictionary<FilmeSelecionadoModel, FilmeSelecionadoModel> listaConfrontos);
        void RealizarUltimasDisputas(ref Dictionary<FilmeSelecionadoModel, FilmeSelecionadoModel> listaConfrontos, ref List<FilmeSelecionadoModel> resultadoConfrontos);
    }

    public class ResultadoFinalService : IResultadoFinalService
    {
        #region Métodos Públicos

        public void RealizarUltimasDisputas(ref Dictionary<FilmeSelecionadoModel, FilmeSelecionadoModel> listaConfrontos, ref List<FilmeSelecionadoModel> resultadoConfrontos)
        {
            while (listaConfrontos.Count > 1)
            {
                listaConfrontos = ListarConfrontosPorChave(resultadoConfrontos);

                if (resultadoConfrontos.Count >= 1)
                    resultadoConfrontos = RealizarConfronto(listaConfrontos);
            }
        }

        public List<FilmeSelecionadoModel> ListarPorOrdemAlfabetica(List<FilmeSelecionadoModel> lista)
        {
            var listaOrdenada = lista.OrderBy(x => x.titulo).ToList();

            return listaOrdenada;
        }

        #endregion
        public Dictionary<FilmeSelecionadoModel, FilmeSelecionadoModel> ListarConfrontos(List<FilmeSelecionadoModel> filmesSelecionadosOrdenados)
        {
            var confrontos = new Dictionary<FilmeSelecionadoModel, FilmeSelecionadoModel>();
            while (filmesSelecionadosOrdenados.Any())
            {
                var primeiroFilme = filmesSelecionadosOrdenados.First();
                var ultimoFilme = filmesSelecionadosOrdenados.Last();

                confrontos.Add(primeiroFilme, ultimoFilme);

                filmesSelecionadosOrdenados.Remove(primeiroFilme);
                filmesSelecionadosOrdenados.Remove(ultimoFilme);
            }

            return confrontos;
        }

        public Dictionary<FilmeSelecionadoModel, FilmeSelecionadoModel> ListarConfrontosPorChave(List<FilmeSelecionadoModel> resultadoConfrontos)
        {
            var confrontos = new Dictionary<FilmeSelecionadoModel, FilmeSelecionadoModel>();
            var novoResultadoConfrontos = new List<FilmeSelecionadoModel>();
            novoResultadoConfrontos.AddRange(resultadoConfrontos);

            while (novoResultadoConfrontos.Any())
            {
                var primeiroFilme = novoResultadoConfrontos[0];
                var segundoFilme = novoResultadoConfrontos[1];

                confrontos.Add(primeiroFilme, segundoFilme);

                novoResultadoConfrontos.RemoveAt(1);
                novoResultadoConfrontos.RemoveAt(0);
            }

            return confrontos;
        }

        public List<FilmeSelecionadoModel> RealizarConfronto(Dictionary<FilmeSelecionadoModel, FilmeSelecionadoModel> listaConfrontos)
        {
            var filmesVencedores = new List<FilmeSelecionadoModel>();
            foreach (var confronto in listaConfrontos)
            {
                //Verifica chave da final para que retorne o primeiro e segundo lugar;
                if (listaConfrontos.Count == 1)
                {
                    DeterminaVencedorChave(filmesVencedores, confronto);
                    filmesVencedores.Clear();

                    filmesVencedores.Add(confronto.Key);
                    filmesVencedores.Add(confronto.Value);

                    filmesVencedores.OrderByDescending(x => x.nota);
                }
                else
                    DeterminaVencedorChave(filmesVencedores, confronto);
            }

            return filmesVencedores;
        }

        #region Métodos Privados
        private static void DeterminaVencedorChave(List<FilmeSelecionadoModel> filmesVencedores, KeyValuePair<FilmeSelecionadoModel, FilmeSelecionadoModel> confronto)
        {
            if (confronto.Key.nota > confronto.Value.nota)
                filmesVencedores.Add(confronto.Key);
            else if (confronto.Key.nota == confronto.Value.nota)
            {
                var listaOrdemAlfabetica = new List<FilmeSelecionadoModel>();
                listaOrdemAlfabetica.Add(confronto.Value);
                listaOrdemAlfabetica.Add(confronto.Key);

                filmesVencedores = listaOrdemAlfabetica.OrderBy(x => x.titulo).ToList();
            }
            else
            {
                filmesVencedores.Add(confronto.Value);
            }
        }
        #endregion
    }
}
