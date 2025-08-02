import { Route, Routes } from "react-router-dom";
import Menu from "./Pages/Menu.jsx";
import Assistidos from "./Pages/Assistidos.jsx";
import Configuracoes from "./Pages/Configuracoes.jsx";
import MinhaLista from "./Pages/MinhaLista.jsx";
import Catalogos from "./Pages/Catalogos.jsx";
import Cadastrar from "./Pages/Cadastrar.jsx";
import Login from "./Pages/Login.jsx";
import Conta from "./Pages/Conta.jsx";
import NavBar from "./Components/Navbar.jsx";
import NotFound from "./Pages/NotFound.jsx";
import Filme from "./Pages/Filme.jsx";
import { AuthProvider } from "./Context/AuthContext.jsx";

export default function Rotas() {
  return (
    <AuthProvider>
      <NavBar />
      <Routes>
        <Route path="/" element={<Menu />} />
        <Route path="/Assistidos" element={<Assistidos />} />
        <Route path="/Configuracoes" element={<Configuracoes />} />
        <Route path="/MinhaLista" element={<MinhaLista />} />
        <Route path="/Catalogos" element={<Catalogos />} />
        <Route path="/Conta" element={<Conta />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Cadastrar" element={<Cadastrar />} />
        <Route path="/Filme/:id" element={<Filme />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </AuthProvider>
  );
}
