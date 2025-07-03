import React from "react";
import CapaFilme from "../Components/Moldura";
import foto_filme from "../../public/images/foto_filme.jpg";

const Menu = () => {
  return (
    <div>
      <h2>Menu</h2>
      <CapaFilme imagem={foto_filme} />
    </div>
  );
};

export default Menu;
