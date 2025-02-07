import CardCarousel from "./CardCarousel/CardCarousel";
import { motion } from "framer-motion";
import "./Gallery.css";
import React, { useEffect, useState } from "react";

const Gallery = () => {
  const cards = [
    {
      image: `${process.env.PUBLIC_URL}/imagenes/imagen6.jpg`,
      title: "Axa Colpatria",
      description: "Desarrollador Liferay",
    },
    {
      image: `${process.env.PUBLIC_URL}/imagenes/Vass-Suramericana.png`,
      title: "Vass Company",
      description: "Desarrollador Liferay",
    },
    {
      image: `${process.env.PUBLIC_URL}/imagenes/imagen7.png`,
      title: "Freelance",
      description: "Desarrollador FullStak",
    },
    {
      image: `${process.env.PUBLIC_URL}/imagenes/codeImg.png`,
      title: "Freelance",
      description: "Desarrollador FullStak",
    },
  ];

  const [textIndex, setTextIndex] = useState(0);
  const texts = [
    "Desde mis inicios en empresas como Colpatria y AXA, he tenido la oportunidad de crear aplicaciones robustas y administrar contenido, siempre buscando mejorar la experiencia del usuario.",
    "Mi enfoque proactivo y mi habilidad para trabajar en equipo me han permitido adaptarme a diferentes desafíos y aprender continuamente.",
    "Estoy comprometido con el desarrollo de soluciones innovadoras que impacten positivamente en la vida de las personas.",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [texts.length]);

  return (
    <motion.div className="Gallery"
    initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}>
      <div className="Gallery-content">
        <CardCarousel cards={cards} />
      </div>
      <div>
        <div className="Gallery-text">
          <h1>Conoceme</h1>
          <p>
            <span className="changing-text">{texts[textIndex]}</span>
          </p>
        </div>
      </div>
    </motion.div>
  );
};
export default Gallery;
