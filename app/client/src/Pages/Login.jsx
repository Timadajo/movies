import React from "react";
import { NavLink } from "react-router-dom";
import { useAuth } from "../Context/AuthContext.jsx";
import { useState } from "react";
import "../Styles/Login.css";

function LoginForm() {
  const { login } = useAuth();
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState("");

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  function handleSubmit(e) {
    e.preventDefault();

    if (!email || !senha) return;

    login(email, senha);

    setEmail("");
    setSenha("");
  }

  return (
    <div className="pagina-total">
      <div className="container w-25 p-3">
        <form onSubmit={handleSubmit}>
          <h1 className="title">Login</h1>

          <div className="mb-2 ">
            <div className="input-box">
              <input
                type="email"
                className="form-control"
                placeholder="E-mail"
                required
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>

          <div className="mb-2 h-25">
            <div className="input-box">
              <input
                type="password"
                className="form-control"
                placeholder="Senha"
                required
                onChange={(e) => setSenha(e.target.value)}
              />
            </div>
          </div>

          <div>
            <NavLink to="/Cadastrar" className="Cadastro">
              Não tem uma conta? Cadastre-se!
            </NavLink>
          </div>

          <button type="submit" className="btn btn-secondary d-block mx-auto">
            Entrar
          </button>
        </form>
      </div>
    </div>
  );
}

export default LoginForm;
