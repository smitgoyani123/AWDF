import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";

import Home from "./pages/Home.jsx";
import Projects from "./pages/Projects.jsx";
import Contact from "./pages/Contact.jsx";
import NotFound from "./pages/NotFound.jsx";
import "./App.css";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDarkMode);
    document.documentElement.classList.toggle("light", !isDarkMode);
  }, [isDarkMode]);

  return (
    <div className={`app-shell ${isDarkMode ? "dark" : "light"}`}>
      <Navbar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />

      <main className="page-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>

      <Footer email="goyanismit@gmail.com" />
    </div>
  );
}

export default App;