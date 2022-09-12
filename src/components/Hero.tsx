import Box from "./Box";
import Header from "./Header";
import "./Hero.css";
const Hero = () => {
  return (
    <section className="hero-sec">
      <Header />
      <div className="container">
        <div className="main">
          <div className="boxes">
            <Box color="black" />
            <Box color="yellow" />
            <Box color="a-green" />
            <Box color="l-green" />
            <Box color="green" />
            <Box color="a-prm" />
          </div>

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
