import Box from "./Box";
import Header from "./Header";
import "./Hero.css";
import { motion, AnimatePresence } from "framer-motion";
import { useRef } from "react";

const Hero = ({ refer }: any) => {
  return (
    <section className="hero-sec">
      <Header refer1={refer} />
      <div className="container">
        <div className="main">
          <AnimatePresence>
            <motion.div className="boxes">
              <Box color="black" />
              <Box color="yellow" />
              <Box color="a-green" />
              <Box color="l-green" />
              <Box color="green" />
              <Box color="a-prm" />
            </motion.div>
          </AnimatePresence>
          <div className="left">
            <h1>Hello ✌, I'm</h1>
            <div className="info">
              <p> Da'ud Sulaimon</p>
              <p className="skill">Frontend Developer</p>
            </div>
          </div>
          <div className="blurs">
            <div className="right"></div>
            <div className="right-1"></div>
          </div>
          <div className="blur"></div>
        </div>
      </div>
      <div className="overlay-bg-header"></div>
    </section>
  );
};

export default Hero;
