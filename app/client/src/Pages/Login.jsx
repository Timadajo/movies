import React from "react";
import '../Styles/Login.css';

const Login = () => {
  return (
    <div className="container">
      <form action="">
        <h1>Login</h1>

        <div className='mb-3'>
          <div className="input-box">
            <input type="email" className='form-control' placeholder="E-mail" required />
          </div>
        </div>

        <div mb-3>
          <div className="input-box">
            <input type="password" className='form-control' placeholder="Senha" required/>
          </div>
        </div>

          <button type="submit" className='btn btn-primary' >Entrar</button>
      </form>

      
    </div>
  );
};

export default Login;
