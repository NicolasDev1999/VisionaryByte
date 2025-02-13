import { useEffect, useState } from "react";
import "./CursorMonster.css";

export default function CursorWebNebula() {
  const [points, setPoints] = useState([]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPoints((prevPoints) => [
        ...prevPoints.slice(-50), // Limita la cantidad de puntos
        {
          x: e.clientX,
          y: e.clientY,
          id: Math.random(),
          opacity: Math.random() * 0.7 + 0.3,
          size: Math.random() * 6 + 2,
        },
      ]);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="cursor-container">
      {points.map((point, i) => (
        <div
          key={point.id}
          className="cursor-point"
          style={{
            top: point.y,
            left: point.x,
            width: `${point.size}px`,
            height: `${point.size}px`,
          }}
        />
      ))}
      {points.map((p1, i) =>
        points.map((p2, j) => {
          if (i !== j) {
            const distance = Math.hypot(p2.x - p1.x, p2.y - p1.y);
            if (distance < 100) {
              return (
                <div
                  key={`line-${p1.id}-${p2.id}`}
                  className="cursor-line"
                  style={{
                    top: `${(p1.y + p2.y) / 2}px`,
                    left: `${(p1.x + p2.x) / 2}px`,
                    width: `${distance}px`,
                    opacity: 1 - distance / 100,
                    transform: `rotate(${Math.atan2(p2.y - p1.y, p2.x - p1.x)}rad)`,
                  }}
                />
              );
            }
          }
          return null;
        })
      )}
    </div>
  );
}
