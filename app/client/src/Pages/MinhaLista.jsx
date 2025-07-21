import React from "react";
import "../Styles/Lista.css";
import { useAuth } from "../Context/AuthContext.jsx";

function MinhaLista() {
  const { isLoggedIn } = useAuth();

  return (
    <>
      <h1 className="titulo">{isLoggedIn ? "Minha Lista" : "Lista"}</h1>
    </>
  );
}
export default MinhaLista;
