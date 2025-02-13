import { useEffect, useState } from "react";
import "./CursorMonster.css";

export default function CursorMonster() {
  const [lines, setLines] = useState([]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setLines((prevLines) => [
        ...prevLines.slice(-50), // Limita la cantidad de líneas para evitar exceso de elementos
        {
          x: e.clientX,
          y: e.clientY,
          id: Math.random(),
          opacity: Math.random() * 0.5 + 0.5, // Opacidad variable para efecto de nebulosa
          size: Math.random() * 5 + 2, // Tamaño variable de las líneas
          hue: Math.floor(Math.random() * 360), // Color aleatorio
        },
      ]);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="cursor-container">
      {lines.map((line) => (
        <div
          key={line.id}
          className="cursor-line"
          style={{
            top: line.y,
            left: line.x,
            width: `${line.size}px`,
            height: `${line.size * 10}px`,
            backgroundColor: `hsla(${line.hue}, 100%, 70%, ${line.opacity})`,
            transform: `rotate(${Math.random() * 360}deg)`,
          }}
        />
      ))}
    </div>
  );
}
