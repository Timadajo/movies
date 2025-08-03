import React, { useState } from "react";
import "../Styles/Catalogo.css";
import { Films } from "../../banco_de_dados";
import CapaFilme from "../Components/Moldura";

export default function Catalogos() {
  const [search, setSearch] = useState("");
  const [selectedGenre, setSelectedGenre] = useState("");
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const generos = [...new Set(Films.map((f) => f.genero))];

  const filmesFiltrados = Films.filter(
    (f) =>
      f.titulo.toLowerCase().includes(search.toLowerCase()) &&
      (selectedGenre === "" || f.genero === selectedGenre)
  );

  return (
    <>
      <h1 className="Cat">Catálogo de Filmes</h1>

      <div className="filtro-container">
        <div className="dropdown-custom">
          <button
            onClick={() => setDropdownOpen(!dropdownOpen)}
            className="dropdown-button"
          >
            {selectedGenre || "Selecionar gênero"}
          </button>
          {dropdownOpen && (
            <ul className="dropdown-list">
              <li onClick={() => setSelectedGenre("")}>Todos os gêneros</li>
              {generos.map((g, i) => (
                <li key={i} onClick={() => setSelectedGenre(g)}>
                  {g}
                </li>
              ))}
            </ul>
          )}
        </div>

        <input
          type="text"
          className="search-input"
          placeholder="Buscar por título"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <div className="filmes-container">
        {filmesFiltrados.map((f) => (
          <CapaFilme key={f.id} imagem={f.capa} id={f.id} />
        ))}
      </div>
    </>
  );
}
