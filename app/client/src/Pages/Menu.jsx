import React from "react";
import CapaFilme from "../Components/Moldura";
import foto_filme from "../../public/images/foto_filme.jpg";
import { Navigate, useNavigate } from "react-router-dom";
import CarrosselGenero from "../Components/CarrosselGenero";

const Menu = () => {
  return (
    <div>
      <h1 className="Title">Menu</h1>
      <CarrosselGenero />
    </div>
  );
};

export default Menu;
