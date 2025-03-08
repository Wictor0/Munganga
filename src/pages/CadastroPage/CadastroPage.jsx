import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // <-- Importa o useNavigate
import "./CadastroPage.css";
import olhoAberto from "./assets/olho-aberto.svg";
import olhoFechado from "./assets/olho-fechado.svg";
import fundoNoise from "../BgLCPages/noise.png";
import fundoCacto from "../BgLCPages/Cacto.png";
import fundoNuvem from "../BgLCPages/nuvem.png";
import containerImg from "./assets/container1.png";

const CadastroPage = () => {
  const [mostrarSenha, setMostrarSenha] = useState(false);
  const navigate = useNavigate(); // <-- Inicializa o useNavigate

  return (
    <div className="cadastro-page">
      <img src={fundoNoise} alt="Fundo Granulado" className="fundo-noise" />
      <img src={fundoCacto} alt="Cacto" className="fundo-cacto" />
      <img src={fundoNuvem} alt="Nuvem" className="fundo-nuvem" />

      <div className="cadastro-container">
        <img
          src={containerImg}
          alt="Container"
          className="cadastro-container-img"
        />
        <div className="cadastro-content">
          <h2>Crie sua conta</h2>
          <div className="cadastro-opcoes">
            <label>
              <input type="radio" name="tipo" className="radio-opcao" />{" "}
              <span>Aluno</span>
            </label>
            <label>
              <input type="radio" name="tipo" className="radio-opcao" />{" "}
              <span>Professor</span>
            </label>
          </div>

          <div className="cadastro-input">
            <label>E-mail</label>
            <input type="email" className="input-texto" />
          </div>

          <div className="cadastro-input senha">
            <label>Senha</label>
            <div className="input-senha-wrapper">
              <input
                type={mostrarSenha ? "text" : "password"}
                className="input-texto"
              />
              <img
                src={mostrarSenha ? olhoAberto : olhoFechado}
                alt="Mostrar senha"
                onClick={() => setMostrarSenha(!mostrarSenha)}
                className="icone-senha"
              />
            </div>
          </div>

          <div className="requisitos-senha">
            <span className="requisito">&#8226; Use 8 ou mais caracteres</span>
            <span className="requisito">&#8226; Use números (ex. 1234)</span>
            <span className="requisito">
              &#8226; Use letras maiúsculas e minúsculas
            </span>
            <span className="requisito">&#8226; Use símbolos (ex. !@#$)</span>
          </div>

          <button className="botao-cadastro">Criar conta</button>
          <p className="termos">
            Ao criar uma conta, você concorda com os{" "}
            <a href="#">Termos de Uso</a> e{" "}
            <a href="#">Política de Privacidade</a>.
          </p>
        </div>
      </div>

      <div className="login-container">
        <div className="divider">Já tem uma conta?</div>
        <button className="botao-login" onClick={() => navigate("/login")}>
          Entre na sua conta
        </button>
      </div>
    </div>
  );
};

export default CadastroPage;
