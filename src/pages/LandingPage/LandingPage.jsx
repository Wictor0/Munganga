import React, { useState } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import LoginModal from "../../components/LoginModal";
import "./LandingPage.css";

import aboutImage from "./assets/sobre-nos.png";
import containerBg from "./assets/container.png";
import emojiIcon from "./assets/emoji.png";
import img1 from "./assets/img1.png";
import img2 from "./assets/img2.png";

const LandingPage = () => {
  const [isLoginOpen, setIsLoginOpen] = useState(false); // Estado para controlar o modal

  const openLoginModal = () => {
    setIsLoginOpen(true); // Abre o modal
  };

  const closeLoginModal = () => {
    setIsLoginOpen(false); // Fecha o modal
  };

  return (
    <div className="landing-page">
      {/* Passamos a função para abrir o modal */}
      <Header onLoginClick={openLoginModal} />

      {/* Modal de Login */}
      <LoginModal isOpen={isLoginOpen} onClose={closeLoginModal} />

      {/* Seção Sobre Nós */}
      <section className="about">
        <div className="about-content">
          <h2>Sobre nós</h2>
          <p>
            A startup <strong>Munganga</strong>, criada por estudantes da{" "}
            <strong>Unifbv Wyden em Recife</strong>, visa transformar o
            aprendizado de programação em uma experiência{" "}
            <strong>divertida e envolvente</strong>. Utilizando a{" "}
            <strong>gamificação</strong>, eles estimulam a{" "}
            <strong>criatividade</strong> e o <strong>raciocínio lógico</strong>
            , tornando o aprendizado acessível e empolgante.
          </p>
          <p>
            Quer descobrir mais sobre como estão transformando essa visão em
            realidade?
          </p>
          <button className="about-btn">Saiba mais</button>
        </div>
        <div className="about-image-container">
          <img src={aboutImage} alt="Equipe Munganga" className="about-image" />
        </div>
      </section>

      {/* Seção O que é Munganga */}
      <section className="about-munganga">
        <img src={containerBg} alt="Fundo" className="background-about" />
        <div className="about-content">
          <h2>
            O que é o Munganga?{" "}
            <img src={emojiIcon} alt="Emoji" className="icon-emoji" />
          </h2>
          <p>
            A plataforma <strong>Munganga</strong> é uma{" "}
            <strong>ferramenta educacional</strong> para{" "}
            <strong>crianças e adolescentes</strong>, que transforma o
            aprendizado de programação em uma experiência prática e envolvente.
            Combinando <strong>desafios de código</strong>,
            <strong>salas virtuais</strong> e um{" "}
            <strong>sistema de rankings gamificado</strong>, ela incentiva o
            desenvolvimento de <strong>pensamento computacional</strong> desde
            cedo, promovendo a <strong>colaboração</strong> e a{" "}
            <strong>competição saudável</strong>.
          </p>
          <button className="btn-learn-more">Saiba mais</button>
        </div>
      </section>

      {/* Seção da Faculdade */}
      <section className="university-section">
        <div className="university-content">
          <h2 className="university-title">UniFBV - Wyden</h2>
          <p className="justified-text">
            Com apoio da <strong>Unifbv Wyden</strong>, usamos seus{" "}
            <strong>recursos e espaço</strong> para criar
            <strong> soluções educacionais avançadas</strong> que ligam o{" "}
            <strong>universo acadêmico</strong> ao
            <strong> mercado</strong>.
          </p>
          <button
            className="btn-university"
            onClick={() =>
              window.open("https://www.wyden.com.br/unidades/unifbv", "_blank")
            }
          >
            Conheça a Universidade
          </button>
        </div>
        <div className="university-images">
          <img src={img1} alt="Imagem 1" className="uni-image" />
          <img src={img2} alt="Imagem 2" className="uni-image" />
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default LandingPage;
