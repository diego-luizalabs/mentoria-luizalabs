import React from 'react';
import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';

const MainContent = () => {
  return (
    <div id="main-content">
      <header>
        <span className="header-logo">Meu Portfólio</span>
        <div className="header-nav">
          <span>@bsddiego</span>
          <a href="#">My projects</a>
        </div>
      </header>

      <main>
        <section className="about-section">
          <h1>Olá!</h1>
          <p>Meus projetos abaixo:</p>
          <div className="project-buttons">
            <button>Projeto Mentoria</button>
            <button>Pokemon</button>
          </div>
        </section>

        <section className="social-section">
          <h2>Redes</h2>
          <p>Conecte-se comigo:</p>
          <div className="social-buttons">
            <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer" className="social-btn linkedin">
              <FaLinkedin /> LinkedIn
            </a>
            <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="social-btn github">
              <FaGithub /> GitHub
            </a>
            <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" className="social-btn instagram">
              <FaInstagram /> Instagram
            </a>
          </div>
        </section>
      </main>

      <footer>
        <p>© 2025 Diego Santos - Projeto Luizalabs</p>
      </footer>
    </div>
  );
};

export default MainContent;