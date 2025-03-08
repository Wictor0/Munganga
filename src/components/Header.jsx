import React from "react";
import { useNavigate } from "react-router-dom";
import "./Header.css";
import logo from "./assets/mung.svg";
import background from "./assets/inicio-header.png";

const Header = ({ onLoginClick }) => {
  const navigate = useNavigate(); // Hook para navegação

  return (
    <header className="header">
      <img src={background} alt="Background" className="background" />
      <div className="content">
        <img src={logo} alt="Munganga Logo" className="logo" />
        <div className="buttons">
          <button className="btn yellow" onClick={() => navigate("/cadastro")}>
            Criar conta
          </button>
          <button className="btn green" onClick={onLoginClick}>
            Entrar
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
