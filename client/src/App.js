import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// import "./App.css";

// pages imports
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Resume from "./pages/Resume";
import Contact from "./pages/Contact";

// component imports
import Navbar from "./components/Navbar";

function App() {
  return (
    <Router>
      <div className="bg-dark min-vh-100">
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/projects" element={<Projects />} />
          <Route exact path="/resume" element={<Resume />} />
          <Route exact path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
