import React, { useRef } from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Hero from "./components/Hero";
import Project from "./components/Project";
import Skills from "./components/Skills";
import "./index.css";

function App() {
  const cRef = useRef(null);
  return (
    <div className="App">
      <Hero refer={cRef} />
      <About refer2={cRef} />
      <Skills />
      <Project />
      <Contact />
    </div>
  );
}

export default App;
