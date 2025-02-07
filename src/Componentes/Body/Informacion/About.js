import React, { useEffect, useState } from 'react';
import { motion } from "framer-motion";
import "./About.css";

// Declaración de los textos y títulos fuera del componente
const texts = [
  <span>
    Soy Sergio Nicolás Galindo Cante, un entusiasta desarrollador de software con una sólida formación en tecnologías web y una pasión por resolver problemas a través de la programación. Con experiencia en el desarrollo de aplicaciones robustas y eficientes, he trabajado en proyectos de gran envergadura, aplicando mis conocimientos en Java, Spring Boot, JavaScript y más. Me destaco por mi habilidad para trabajar en entornos colaborativos, donde combino la creatividad y el pensamiento crítico para ofrecer soluciones innovadoras. Siempre en busca de aprender y mejorar, mi objetivo es seguir creciendo en el campo del desarrollo y contribuir a proyectos que marquen la diferencia en la vida de las personas.
    <br/><br/>
    <strong>Lenguajes y habilidades:</strong>
    <ul className="skills-list">
      <li>Java</li>
      <li>Spring Boot</li>
      <li>JavaScript</li>
      <li>React</li>
      <li>MySQL</li>
      <li>Git</li>
      <li>HTML & CSS</li>
    </ul>
  </span>,
  'Apasionado creador audiovisual con un enfoque especial en la cultura del skate. Desde mis inicios, he combinado mi amor por el arte y la tecnología, produciendo contenido que captura la esencia de la vida cotidiana del skateboarding. Con experiencia en fotografía, edición de video y un estilo inspirado en los clásicos de los años 80 y 90, busco contar historias visuales que conecten con la audiencia y transmitan la emoción y energía del skate. Mi objetivo es seguir innovando y creciendo en este campo, creando proyectos que resalten la autenticidad y el dinamismo de la cultura urbana.'
];

const titles = ['Como Desarrollador', 'Como Productor Audiovisual'];

const About = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 10000); 

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div className="information-content"
      initial={{ opacity: 0, y: 150 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}>
      <div className="banner-text-info">
        <h1>{titles[index]}</h1>
        <p>
          <span className="changing-text">{texts[index]}</span>
        </p>
      </div>
      <div className="banner-image_about"></div>
    </motion.div>

    
  );
};

export default About;
