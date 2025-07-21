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
      <h1 className="Catalogo">Catálogo de filmes</h1>
      <div className="Molduras">
        <CapaFilme imagem={superman} />
        <CapaFilme imagem={quarteto} />
        <CapaFilme imagem={foto_filme} />
        <CapaFilme imagem={Auto} />
        <CapaFilme imagem={dragao} />
        <CapaFilme imagem={pecadores} />
        <CapaFilme imagem={f1} />
        <CapaFilme imagem={mosferatu} />
        <CapaFilme imagem={comH} />
        <CapaFilme imagem={fezontem} />
        <CapaFilme imagem={smurfs} />
        <CapaFilme imagem={stich} />
        <CapaFilme imagem={vitoria} />
      </div>
    </>
  );
}
export default Catalogos;
