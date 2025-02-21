import { Navbar } from './components/navbar';
import './styles/home.css';
import myImage from './images/perfil.jpeg';
import secondImage from './images/instagram.svg';
import thirdImage from './images/linkedin.svg'; 
import fourImage from './images/github.svg';

function Home() {
  return (
    <>
      <Navbar />
      <div className="container">
        <div className="text-content">
          <h1>Victor é um desenvolvedor apaixonado por aprender e explorar novidades.</h1>
          <p>Atualmente, estou cursando Sistemas de Informação e mal posso esperar para começar minha carreira como desenvolvedor!</p>
          <div className="social-icons">
          <a href="https://www.instagram.com/victor.britoo_/" target='_blank'><img src={secondImage}  alt="Instagram" /></a>
          <a href="https://www.linkedin.com/in/victor-gabriel-7aba632a8/" target='_blank'><img src={thirdImage} alt="LinkedIn" /></a>
          <a href="https://github.com/VictorBritto" target='_blank'><img src={fourImage} alt="GitHub"  /></a>
          </div>
        </div>
        <div className="image-content">
          <img src={myImage} alt="Victor" />
        </div>
      </div>

      {/* COMENTÁRIO JSX 
      <div className='stock-tricker'>
        <ul>
          <li>
            <span className='minha'></span>
            <span className='carreira'>Carreira</span>
          </li>
          <li>
            <span className='minha'>Minha</span>
            <span className='carreira'>Carreira</span>
          </li>
          <li>
            <span className='minha'>Minha</span>
            <span className='carreira'>Carreira</span>
          </li>
          <li>
            <span className='minha'>Minha</span>
            <span className='carreira'>Carreira</span>
          </li>
          <li>
            <span className='minha'>Minha</span>
            <span className='carreira'>Carreira</span>
          </li>
          <li>
            <span className='minha'>Minha</span>
            <span className='carreira'>Carreira</span>
          </li>
        </ul>
      </div>

      <div className="text-content">
        <h1>SOBRE MIM</h1>
        <p>Olá, sou Bruno Eiji, mas prefiro ser chamado de Eiji. É um prazer conhecê-lo! Há dois anos, entrei de cabeça no universo da programação, cheio de determinação e paixão. 
          Desde então, tenho sido dedicado ao meu trabalho, sempre em busca de novas formas de inovar. Para mim, cada linha de código representa uma chance emocionante de dar vida a ideias e transformá-las 
          em realidade. Estou comprometido em crescer constantemente, aprendendo e contribuindo para o avanço da tecnologia.
        </p>
      </div>
      */}
    </>
  );
}

export default Home;
