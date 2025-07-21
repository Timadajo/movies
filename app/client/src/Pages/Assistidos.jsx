import React from "react";
import { useAuth } from "../Context/AuthContext.jsx";
import "../Styles/Assistidos.css";

function Assistidos() {
  const { isLoggedIn } = useAuth();
  return (
    <>
      <h1 className="title">
        {isLoggedIn
          ? "Seus filmes assistidos"
          : "Logue para saber ver seus filmes assistidos"}
      </h1>
    </>
  );
}

export default Assistidos;
