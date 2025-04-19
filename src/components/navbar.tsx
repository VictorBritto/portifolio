import '../styles/navbar.css';
import thirdImage from "../images/linkedin.svg";
import fourImage from "../images/github.svg";
import curriculo from "../images/email.svg"

export function Navbar(){
    return(
    <nav>
        <div className="social-icons">
            <a href="https://www.linkedin.com/in/victor-gabriel-7aba632a8/" target="_blank" rel="noopener noreferrer">
              <img src={thirdImage} alt="LinkedIn" />
            </a>
            <a href="https://github.com/VictorBritto" target="_blank" rel="noopener noreferrer">
              <img src={fourImage} alt="GitHub" />
            </a>
          </div>
            <ul className='text1'>
                <img src={curriculo} alt="GitHub" />
                <li><a href="https://www.linkedin.com/in/victor-gabriel-7aba632a8/" target="_blank">Currículo</a></li>
            </ul>
    </nav>
    )
}