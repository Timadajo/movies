import React from "react";
import "../Styles/Cadastrar.css";

const Cadastrar = () => {
  return (
    <div className="pagina-total">
      <form className="containerCadastrar w-75 p-3 row g-3">
        {" "}
        <h1>Cadastro</h1>
        <div className="col-md-6">
          <label for="inputEmail4" className="form-label">
            Email
          </label>
          <input
            type="email"
            className="form-control"
            id="inputEmail4"
            placeholder="Seu e-mail"
          />
        </div>
        <div className="col-md-6">
          <label for="inputPassword4" className="form-label">
            Senha
          </label>
          <input
            type="password"
            className="form-control"
            id="inputPassword4"
            placeholder="Sua senha"
          />
        </div>
        <div className="col-12">
          <label for="inputAddress" className="form-label">
            Nome
          </label>
          <input
            type="text"
            className="form-control"
            id="inputAddress"
            placeholder="Nome de usuário"
          />
        </div>
        <div className="col-12">
          <button type="submit" className="btn btn-secondary">
            Cadastrar
          </button>
        </div>
      </form>
    </div>
  );
};

export default Cadastrar;
