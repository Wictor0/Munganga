import React from "react";
import "./Header.css";
import logo from "./assets/mung.svg"; // logo da Munganga
import background from "./assets/inicio-header.png"; // imagem do retângulo

const Header = () => {
  return (
    <header className="header">
      <img src={background} alt="Background" className="background" />
      <div className="content">
        <img src={logo} alt="Munganga Logo" className="logo" />
        <div className="buttons">
          <button className="btn yellow">Criar conta</button>
          <button className="btn green">Entrar</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
