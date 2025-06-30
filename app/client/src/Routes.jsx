import {Route, Routes} from "react-router-dom";
import Menu from "./Pages/Menu.jsx";
import Assistidos from "./Pages/Assistidos.jsx";
import Configuracoes from "./Pages/Configuracoes.jsx";
import MinhaLista from "./Pages/MinhaLista.jsx";
import Perfil from "./Pages/Perfil.jsx";
import Catalogos from "./Pages/Catalogos.jsx";
import NavBar from "./Components/Navbar.jsx";

export default function Rotas() {
    return (
        <>
        <NavBar />
        <Routes>
            <Route path="/" element={<Menu />} />
            <Route path="/Assistidos" element={<Assistidos />}/>
            <Route path="/Configuracoes" element={<Configuracoes />}/>
            <Route path="/MinhaLista" element={<MinhaLista />}/>
            <Route path="/Perfil" element={<Perfil />}/>
            <Route path="/Catalogos" element={<Catalogos />}/>
        </Routes>
        </>
    );
}