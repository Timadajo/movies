import React from "react";
import "../Styles/Nav.css";

export default function CapaFilme({ imagem }) {
  return <img src={imagem} className="capa" alt="Capa do filme" />;
}
