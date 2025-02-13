import React, { useEffect, useState } from 'react';
import { motion } from "framer-motion";
import './Banner.css';
import CursorMonster from '../CursorMonster/CursorMonster';
const Banner = () => {
  
  const [textIndex, setTextIndex] = useState(0);
  const texts = ['Soy Nicolás Galindo', 'Desarrollador Web', 'Productor Audiovisual'];

  useEffect(() => {
    const interval = setInterval(() => {
      setTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 2500); 
    return () => clearInterval(interval);
  }, [texts.length]);

  return (
    <motion.div className="banner"
    initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}>
        <div className='banner-text'>
            <h1>Bienvenido</h1>
            <h2><span className="changing-text">{texts[textIndex]}</span></h2>
        </div>

       {/* <div className="banner-image"></div> */}
      <CursorMonster/>
    </motion.div>
    
  );
};

export default Banner;
