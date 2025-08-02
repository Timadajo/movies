import { useEffect, useState } from "react";
import CarrosselManual from "./Carrossel";
import CapaFilme from "./Moldura";
import "../Styles/App.css";

export default function CarrosselGenero() {
  const [filmesPorGenero, setFilmesPorGenero] = useState({});

  useEffect(() => {
    fetch("/banco_de_filmes.json")
      .then((res) => res.json())
      .then((data) => {
        console.log("Filmes carregados:", data);
        const agrupado = agruparFilmesPorGenero(data);
        setFilmesPorGenero(agrupado);
      })
      .catch((err) => console.error("Erro ao carregar filmes:", err));
  }, []);

  function agruparFilmesPorGenero(lista) {
    return lista.reduce((acc, filme) => {
      const genero = filme.genero;
      if (!acc[genero]) acc[genero] = [];
      acc[genero].push(filme);
      return acc;
    }, {});
  }

  return (
    <div>
      {Object.entries(filmesPorGenero).map(([genero, filmes]) => (
        <div key={genero} className="sessao-genero">
          <h2>{genero}</h2>
          <CarrosselManual>
            {filmes.slice(0, 24).map((filme) => (
              <div className="filme-capa" key={filme.id}>
                <CapaFilme
                  imagem={filme.capa}
                  id={filme.id}
                  alt={filme.titulo}
                />
              </div>
            ))}
          </CarrosselManual>
        </div>
      ))}
    </div>
  );
}
