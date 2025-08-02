import React from "react";
import "../Styles/App.css";
import { useNavigate } from "react-router-dom";

export default function CapaFilme({ imagem, id }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/filme/${id}`);
  };

  return (
    <div className="moldura">
      <img
        src={imagem}
        alt="Capa do filme"
        className="capa"
        onClick={handleClick}
        onError={(e) => {
          e.target.src = "/fallback.jpg";
        }}
      />
    </div>
  );
}
