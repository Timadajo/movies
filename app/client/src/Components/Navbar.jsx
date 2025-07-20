import { NavLink } from "react-router-dom";
import "../Styles/Nav.css";
import engrenagem from "../../public/images/engrenagem.png";
import { useAuth } from "../Context/AuthContext.jsx";

export default function NavBar() {
  const { isLoggedIn } = useAuth();

  function handleClick() {
    if (isLoggedIn) {
      logout();
    } else {
    }
  }

  return (
    <nav>
      <div className="AllLeft">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "nav-linkL active" : "nav-LeftButton"
          }
        >
          Menu
        </NavLink>
        <NavLink
          to="/Assistidos"
          className={({ isActive }) =>
            isActive ? "nav-linkL active" : "nav-LeftButton"
          }
        >
          Assistidos
        </NavLink>
        <NavLink
          to="/Catalogos"
          className={({ isActive }) =>
            isActive ? "nav-linkL active" : "nav-LeftButton"
          }
        >
          Catalogos
        </NavLink>
        <NavLink
          to="/MinhaLista"
          className={({ isActive }) =>
            isActive ? "nav-linkL active" : "nav-LeftButton"
          }
        >
          {isLoggedIn ? "Minha Lista" : "Lista"}
        </NavLink>
      </div>
      <div className="AllRight">
        <div className="dropdown">
          <div>
            <div className="cursor">
              <img
                src={engrenagem}
                className="engrenagem"
                alt="Configurações"
              />
            </div>
            <div className="dropdown-content">
              <NavLink to="/Conta">
                {isLoggedIn ? "Minha Conta" : "Conta"}
              </NavLink>
              <NavLink to="/Configuracoes">Configurações</NavLink>
              <NavLink to="/login" onClick={handleClick}>
                {isLoggedIn ? "Sair" : "Entrar"}
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
