import React from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Hero from "./components/Hero";
import Project from "./components/Project";
import Skills from "./components/Skills";
import "./index.css";

function App() {
  return (
    <div className="App">
      <Hero />
      <About />
      <Skills />
      <Project />
      <Contact />
    </div>
  );
}

export default App;
