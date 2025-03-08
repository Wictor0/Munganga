import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./LoginPage.css";
import olhoAberto from "./assets/olho-aberto.svg";
import olhoFechado from "./assets/olho-fechado.svg";
import fundoNoise from "../BgLCPages/noise.png";
import fundoCacto from "../BgLCPages/cacto.png";
import fundoNuvem from "../BgLCPages/nuvem.png";
import entrarImg from "./assets/criar.png";

const LoginPage = () => {
  const [mostrarSenha, setMostrarSenha] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="pagina-login">
      {/* Imagens de fundo */}
      <img
        src={fundoNoise}
        alt="Fundo Granulado"
        className="login-fundo-noise"
      />
      <img src={fundoCacto} alt="Cacto" className="login-fundo-cacto" />
      <img src={fundoNuvem} alt="Nuvem" className="login-fundo-nuvem" />

      {/* Container principal do login */}
      <div className="container-login">
        <div className="conteudo-login">
          <h2>Entre na sua conta</h2>

          <div className="campo-login">
            <label>E-mail</label>
            <input type="email" className="login-input-texto" />
          </div>

          <div className="campo-login senha">
            <label>Senha</label>
            <div className="login-input-senha-wrapper">
              <input
                type={mostrarSenha ? "text" : "password"}
                className="login-input-texto"
              />
              <img
                src={mostrarSenha ? olhoAberto : olhoFechado}
                alt="Mostrar senha"
                onClick={() => setMostrarSenha(!mostrarSenha)}
                className="login-icone-senha"
              />
            </div>
          </div>

          <p className="login-link-problema">
            <a href="#">Está com problemas para entrar?</a>
          </p>

          <button className="botao-entrar">Entrar</button>
          <p className="login-termos">
            Ao continuar, você concorda com os <a href="#">Termos de uso</a> e{" "}
            <a href="#">Política de Privacidade</a>.
          </p>
        </div>
      </div>

      {/* Seção para redirecionar ao cadastro */}
      <div className="container-redirecionar">
        <div className="divisor-cadastro">Ainda não tem uma conta?</div>
        <div
          className="botao-criar-wrapper"
          onClick={() => navigate("/cadastro")}
        >
          <img src={entrarImg} alt="Criar conta" className="botao-criar-img" />
          <span className="botao-criar-texto">Criar sua conta</span>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
