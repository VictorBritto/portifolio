import { useEffect, useState } from "react";
import "../styles/inicio.css";

const Inicio = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + Math.floor(Math.random() * 10) + 1;
      });
    }, 200);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="hacker-loading">
      <div className="terminal">
        <p className="terminal-line"> Iniciando portfólio...</p>
        <h1 className="name">Victor Gabriel</h1>
        <div className="progress-bar">
          <span>
            [{" "}
            {"█".repeat(Math.floor(progress / 10))}
            {"░".repeat(10 - Math.floor(progress / 10))}{" "}
            ] {progress}%
          </span>
        </div>
        <div className="cursor-blink">|</div>
      </div>
    </div>
  );
};

export default Inicio;
