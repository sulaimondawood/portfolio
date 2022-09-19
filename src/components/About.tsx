import "./About.css";
import { BsArrowUpRight } from "react-icons/bs";
const About = ({ refer2 }: any) => {
  return (
    <section ref={refer2} id="about" className="about">
      <h1 className="overlay">ABOUT ME </h1>
      <div className="about-info">
        <h1>About ME 📝</h1>
        <div className="info-me">
          <p>
            I'm a detail-oriented frontend developer. A reliable team player
            offering exceptional time management skills with more than a year
            experience in the field. Most importantly, an individual with the
            ability to adapt to any situation and also think critically to solve
            complex problems
          </p>
          <div className="btn-container">
            <a
              className="get link"
              target="_blank"
              rel="noreferrer"
              href="mailto:sulaimondawod@gmail.com"
            >
              Get In Touch <BsArrowUpRight />
            </a>

            <a
              className="resume link"
              target="_blank"
              rel="noreferrer"
              href="https://drive.google.com/file/d/1aAuPYPZF4dEky3zXvfa8w0XydyXhnVT-/view?usp=sharing"
            >
              Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
