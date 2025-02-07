import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import "./NavBar.css";
import ThemeToggleButton from "../../ThemeToggleButton/ThemeToggleButton";

const NavBar = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  const handleResize = () => {
    setIsMobile(window.innerWidth <= 768);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <nav className="navbar">
      {!isMobile ? (
        <ul className="nav-links">
          <li className="navbar-item">
            <Link to="/Banner">Inicio</Link>
          </li>
          <li className="navbar-item">
            <Link to="/About">Acerca de mii</Link>
          </li>
          <li className="navbar-item">
            <Link to="/Gallery">Experiencia</Link>
          </li>
        </ul>
      ) : (
        <div className="mobile-nav">
          <Link to="/Banner" className="mobile-nav-item">
            Inicio
          </Link>
          <Link to="/About" className="mobile-nav-item">
            Sobre Mi
          </Link>
          <Link to="/Gallery" className="mobile-nav-item">
            Experiencia
          </Link>
        </div>
      )}
      {/* 
      <div className="navbar-icon">
        <a href='/Page202409/'><img src={"./imagenes/iconPage.png"} alt="Logo" className="navbar-logo" /></a>
      </div>
    */}
      <div className="nav-logo-title">
        <h1><a className="text-logo" href="1">VisionaryByte</a></h1>
      </div>
      <ThemeToggleButton/>
    </nav>
  );
};

export default NavBar;
