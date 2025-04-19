import "../styles/sobre.css";
import perfil from "../images/perfil.jpg";

export function Sobre (){
  return (
    <div className="sobre-container">
      <div className="sobre-card">
        <img
            src={perfil} // Substitua por uma URL de imagem real
            alt="Victor"
            className="profile-image"
          />
        <div className="sobre-text">
          <h1>SOBRE</h1>
          <p>
            Sou o Victor, desenvolvedor apaixonado por tecnologia e aprendizado contínuo. Cursando
            Sistemas de Informação, estou pronto para iniciar minha jornada profissional e aplicar na prática
            o que venho estudando.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Sobre;