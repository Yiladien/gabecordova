import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// import "./App.css";

// pages imports
import About from "./pages/About";
import Projects from "./pages/Projects";
import Resume from "./pages/Resume";
import Contact from "./pages/Contact";

// component imports
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <div className="bg-dark min-vh-100 pt-5 pb-5">
        <Navbar />
        <div className="pt-4 pb-2">
          <Routes>
            <Route exact path="/" element={<About />} />
            <Route exact path="/projects" element={<Projects />} />
            <Route exact path="/resume" element={<Resume />} />
            <Route exact path="/contact" element={<Contact />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
