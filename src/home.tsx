import { Navbar } from "./components/navbar";
import { Tecnologia } from "./components/tecnologia";
import "./styles/home.css";
import myImage from "./images/perfil.jpeg";
import secondImage from "./images/instagram.svg";
import thirdImage from "./images/linkedin.svg";
import fourImage from "./images/github.svg";

function Home() {
  return (
    <>
      <Navbar />
      <div className="container">
        <div className="text-content">
          <h1>Victor é um desenvolvedor apaixonado por aprender e explorar novidades.</h1>
          <p>Atualmente, estou cursando Sistemas de Informação e mal posso esperar para começar minha carreira como desenvolvedor!</p>
          <div className="social-icons">
            <a href="https://www.instagram.com/victor.britoo_/" target="_blank" rel="noopener noreferrer">
              <img src={secondImage} alt="Instagram" />
            </a>
            <a href="https://www.linkedin.com/in/victor-gabriel-7aba632a8/" target="_blank" rel="noopener noreferrer">
              <img src={thirdImage} alt="LinkedIn" />
            </a>
            <a href="https://github.com/VictorBritto" target="_blank" rel="noopener noreferrer">
              <img src={fourImage} alt="GitHub" />
            </a>
          </div>
        </div>
        <div className="image-content">
          <img src={myImage} alt="Victor" />
        </div>
      </div>

      <Tecnologia />
    </>
  );
}

export default Home;
