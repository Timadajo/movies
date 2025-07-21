import React from "react";
import { useAuth } from "../Context/AuthContext.jsx";
import "../Styles/Conta.css";
import { NavLink } from "react-router-dom";

function Conta() {
  const { isLoggedIn } = useAuth();

  return (
    <>
      <div className="Conta">
        {isLoggedIn ? "Sua Conta" : "Logue para acessar sua conta"}
      </div>
      <div>
        <p className="foto">Foto de perfil</p>
      </div>
      <div>
        <h1 className="Conta">Conta</h1>
      </div>
      <div className="Usuario">
        <p>Nome de usuário:{}</p>
        <p>E-mail:{}</p>
        <p>Senha:{}</p>
        <NavLink to="/Login" className="nav">
          {isLoggedIn ? "Sair" : "Entrar"}
        </NavLink>
      </div>
    </>
  );
}

export default Conta;
