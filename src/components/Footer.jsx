import React from "react";
import "./Footer.css";
import logo from "./assets/mung.svg"; // Caminho correto da logo
import barraColorida from "./assets/barra-de-baixo.png"; // Caminho correto da imagem
import instagramIcon from "./assets/instagram.svg"; // Ícone do Instagram
import linkedinIcon from "./assets/linkedin.svg"; // Ícone do LinkedIn
import tiktokIcon from "./assets/tiktok.svg"; // Ícone do TikTok

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="footer">
      <img
        src={barraColorida}
        alt="Barra decorativa"
        className="footer-barra"
      />

      <div className="footer-content">
        <img
          src={logo}
          alt="Logo Munganga"
          className="footer-logo"
          onClick={scrollToTop}
        />

        <div className="footer-info">
          <div className="footer-section">
            <h4>Contato</h4>
            <p>munganga@munganga.com.br</p>
            <p>(81) 00000-0000</p>
          </div>

          <div className="footer-section">
            <h4>Local</h4>
            <p>Recife-PE</p>
          </div>

          <div className="footer-social">
            <a
              href="https://www.instagram.com/mungangape/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={instagramIcon} alt="Instagram" />
            </a>
            <a
              href="https://www.linkedin.com/company/mungangape/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={linkedinIcon} alt="LinkedIn" />
            </a>
            <a
              href="https://tiktok.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={tiktokIcon} alt="TikTok" />
            </a>
          </div>
        </div>
      </div>

      <p className="footer-copy">
        ©2025 Munganga. Todos os direitos reservados.
      </p>
    </footer>
  );
};

export default Footer;
