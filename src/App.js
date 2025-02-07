import "./App.css";
import "./global.css";
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import WhatsAppButton from "./Componentes/Body/Whatsapp/Whatsapp";
import Footer from "./Componentes/Footer/Footer";
import NavBar from "./Componentes/Header/NavBar/NavBar";
import Banner from "./Componentes/Body/Home/Banner";
import About from "./Componentes/Body/Informacion/About";
import Gallery from "./Componentes/Body/Gallery/Gallery";

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <NavBar />
        </header>
        
        <main className="container">
          <Routes>
            <Route path="/" element={<Banner />} />
            <Route path="/Banner" element={<Banner />} />
            <Route path="/About" element={<About/>} />
            <Route path="/Gallery" element={<Gallery/>}/>
          </Routes>
        </main>
        <WhatsAppButton />
        <footer>
          <Footer />
        </footer>
      </div>
    </Router>
  );
}

export default App;
