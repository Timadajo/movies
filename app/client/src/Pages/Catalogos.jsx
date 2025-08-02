import React from "react";
import "../styles/Catalogo.css";
import CapaFilme from "../Components/Moldura";
import foto_filme from "../../public/images/foto_filme.jpg";
import Auto from "../../public/images/Autoc2.jpg";
import dragao from "../../public/images/dragao.webp";
import f1 from "../../public/images/f1.jpg";
import mosferatu from "../../public/images/mosferatu.jpeg";
import pecadores from "../../public/images/pecadores.jpeg";
import quarteto from "../../public/images/quarteto.webp";
import superman from "../../public/images/superman.webp";
import comH from "../../public/images/comH.jpeg";
import fezontem from "../../public/images/fezontem.jpeg";
import smurfs from "../../public/images/smurfs.jpeg";
import stich from "../../public/images/stich.jpeg";
import vitoria from "../../public/images/vitoria.jpeg";

function Catalogos() {
  return (
    <>
      <h1 className="Cat">Catálogo de Filmes</h1>;<div></div>
      <div class="btn-group">
        <button
          type="button"
          class="btn btn-danger dropdown-toggle"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Danger
        </button>
        <ul class="dropdown-menu">
          <li>
            <a class="dropdown-item" href="#">
              Action
            </a>
          </li>
          <li>
            <a class="dropdown-item" href="#">
              Another action
            </a>
          </li>
          <li>
            <a class="dropdown-item" href="#">
              Something else here
            </a>
          </li>
          <li>
            <hr class="dropdown-divider" />
          </li>
          <li>
            <a class="dropdown-item" href="#">
              Separated link
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}
