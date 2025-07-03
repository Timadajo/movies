import React from "react";
import '../Styles/Login.css';

const Cadastrar = () => {
  return (
    <div className="container">
      <form action="">
        <h1>Cadastrar</h1>

        <div className="input-box">
          <input type="email" placeholder="E-mail" required />
        </div>

        <div className="input-box">
          <input type="password" placeholder="Senha" required/>
        </div>

        <button type="submit">Criar Conta</button>
      </form>

    </div>
  );
};

export default Cadastrar;
