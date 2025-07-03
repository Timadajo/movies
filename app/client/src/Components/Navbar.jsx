import { NavLink } from "react-router-dom";
import "../Styles/Nav.css";
import engrenagem from "../../public/images/engrenagem.png";

export default function NavBar() {
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
          Minha Lista
        </NavLink>
      </div>
      <div className="AllRight">
        <div className="dropdown">
          <div>
            <div className="cursor">
              <img src={engrenagem} className="engrenagem" alt="" />
            </div>
            <div className="dropdown-content">
              <NavLink to="/Conta">Minha Conta</NavLink>
              <NavLink to="/Configuracoes">Configurações</NavLink>
              <NavLink to="/login">Sair</NavLink>
            </div>
          </div>
        </div>
        <NavLink
          to="/Perfil"
          className={({ isActive }) =>
            isActive ? "nav-linkR active" : "nav-RightButton"
          }
        >
          Perfil
        </NavLink>
      </div>
    </nav>
  );
}
