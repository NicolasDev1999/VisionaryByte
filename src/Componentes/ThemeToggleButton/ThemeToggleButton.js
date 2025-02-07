import { useState, useEffect } from "react";
import './ThemeToggleButton.css';  // Importación del archivo CSS

export default function ThemeToggleButton() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme") || "light";
    setTheme(storedTheme);
    document.documentElement.setAttribute("data-theme", storedTheme);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
  };

  return (
    <button 
      onClick={toggleTheme} 
      className="theme-toggle-button"
    >
      {theme === "light" ? "Dark Mode" : "Light Mode"}
    </button>
  );
}
