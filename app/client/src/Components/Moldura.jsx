import React from "react";
import "../Styles/Moldura.css";

export default function CapaFilme({ imagem }) {
  return (
    <div className="moldura">
      <img src={imagem} alt="Capa do filme" className="capa" />
    </div>
  );
}
