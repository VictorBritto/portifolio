import { useEffect, useState } from "react";
import { Navbar } from "./components/navbar";
import { Tecnologia } from "./components/tecnologia";
import { Work } from "./components/work";
import { Sobre } from "./components/sobre";
import { Footer } from "./components/footer";
import Inicio from "./pages/Inicio"; // Importando o LoadingPage
import "./styles/home.css";
import perfil from "./images/perfil.jpg";

// Componente Home
function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3500); // 3.5 segundos de loading
    return () => clearTimeout(timer);
  }, []);

  // Se estiver carregando, renderiza o LoadingPage
  if (loading) {
    return <Inicio />;
  }

  // Caso contrário, renderiza o conteúdo real
  return (
    <>
      <Navbar />
      <div className="flex items-center justify-center overflow-hidden">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full border arco"
            style={{
              width: `${170 + i * 100}px`,
              height: `${170 + i * 100}px`,
            }}
          ></div>
        ))}

        <div className="relative flex flex-col items-center image">
          <img
            src={perfil}
            alt="Victor Gabriel"
            className="w-70 h-70 rounded-full object-cover shadow-md"
          />
          <p className="text-gray-400 mt-4 text-sm tracking-widest">
            DEVELOP FRONT-END
          </p>
          <h1 className="text-white text-lg font-bold">VICTOR GABRIEL</h1>
        </div>
      </div>

      <nav className="nav">
        <ul>
          <li className="borda-hover"><a href="#tecnologia">Tecnologias</a></li>
          <li className="borda-hover"><a href="#work">Work</a></li>
          <li className="borda-hover"><a href="#sobre">Sobre</a></li>
        </ul>
      </nav>

      <div id="tecnologia"><Tecnologia /></div>
      <div id="work"><Work /></div>
      <div id="sobre"><Sobre /></div>
      <Footer />
    </>
  );
}

export default Home;
