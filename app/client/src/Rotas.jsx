import {Route, Routes, BrowserRouter} from "react-router";

export default function Rotas() {
    return (
        <BrowserRouter>
        <Routes>
            <Route element={<Inicio />} path="/Inicio" />
        </Routes>
        </BrowserRouter>
    );
}