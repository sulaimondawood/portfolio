import { DiJavascript1, DiReact, DiSass } from "react-icons/di";
import { SiTypescript, SiRedux, SiNextdotjs, SiCss3 } from "react-icons/si";
import "./Skills.css";
import { motion } from "framer-motion";
const Skills = () => {
  return (
    <section id="technology" className="skills-sec">
      <div className="title">
        <h1>⚙ Technologies ⚙</h1>
        <div className="skill-flex">
          <motion.div
            initial={{ x: 0 }}
            whileInView={{ x: ["800px", "0px"] }}
            transition={{ duration: "40", repeat: Infinity }}
            className="top"
          >
            <p>JavaScript</p>
            <p>GraphQL</p>
            <p>Tailwindcss </p>
            <p>Sass</p>
            <p>Css</p>
            <p>React.js</p>
            <p>Redux</p>
            <p>Typescript</p>
            <p>Rest Api</p>
            <p>Github</p>
            <p>Next.js</p>
          </motion.div>
          <motion.div
            initial={{ x: 0 }}
            whileInView={{ x: ["-800px", "0px"] }}
            transition={{ duration: 40, ease: "easeInOut", yoyo: Infinity }}
            className="bottom"
          >
            <p>React.js</p>
            <p>Redux</p>
            <p>Typescript</p>
            <p>Rest Api</p>
            <p>JavaScript</p>
            <p>GraphQL</p>
            <p>Tailwindcss </p>
            <p>Sass</p>
            <p>Css</p>
            <p>Github</p>
            <p>Next.js</p>
          </motion.div>
        </div>
        <div className="skills-logo">
          <div className="s-log js">
            <DiJavascript1 />
          </div>
          <div className="s-log rt">
            <DiReact />
          </div>
          <div className="s-log ss">
            <DiSass />
          </div>
          <div className="s-log css">
            <SiCss3 />
          </div>
          <div className="s-log rd">
            <SiRedux />
          </div>
          <div className="s-log nt">
            <SiNextdotjs />
          </div>
          <div className="s-log ts">
            <SiTypescript />
          </div>
        </div>
        <div className="overlay color-skill">TECHNOLOGIES</div>
      </div>
    </section>
  );
};

export default Skills;
