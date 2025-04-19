import "../styles/tecnologia.css";
import react from "../images/react.png"
import flutter from "../images/flutter.webp"
import js from "../images/js.png";
import php from "../images/php.png";
import html from "../images/html.png";
import css from "../images/css.png";
import bootstrap from "../images/bootstrap.png";
import figma from "../images/figma.png";


export function Tecnologia() {
    return (
        <>
        <h1 className="tec">
            TECNOLOGIAS
        </h1>
        <div className="linguagens">
            <img src={react} alt="" />
            <img src={flutter} alt="" />
            <img src={js} />
            <img src={php}/>
            <img src={html}/>
            <img src={css}/>
            <img src={bootstrap}/>
            <img src={figma}/>
        </div>
        </>
    );
}