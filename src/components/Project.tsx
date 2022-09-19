import Crypto from "../assets/p1.png";
import Gym from "../assets/p2.png";
import "./Project.css";
const Project = () => {
  return (
    <div className="container">
      <section className="project" id="project">
        <h1 className="title">Projects 😋</h1>
        <div className="project-wrp">
          <div className="first">
            <img src={Crypto} alt="" />
          </div>
          <div className="desc-wrp">
            <p className="p-desc">
              <h1>CryptoByte</h1>A cryptocurrency website that tracks Trade
              Market Capitalization, ATH(All Time High), ATL(All Time Low).It
              also entails details about each cryptocurrency available on the
              website alongside their official platform to get a fully detailed
              information
            </p>
            <a href="https://crpto-byte-dawood.netlify.app/">Visit Site </a>
          </div>
        </div>
        <div className="project-wrp wrp-2">
          <div className="second first">
            <img src={Gym} alt="" />
          </div>
          <div className="desc-wrp">
            <p className="p-desc">
              <h1>Gymnastic Landing Page</h1>
              This is a simple gymnastic landing page that contains some reviews
              from past clients that were able to achieve their ideal body, the
              different method or plans they have at the moment and some core
              features
            </p>
            <a href="https://gym-landing-dawood.netlify.app/">Visit Site </a>
          </div>
        </div>
        <div className="overlay p-stroke">PROJECTS</div>
        <div className="overlay p-stroke-l">PROJECTS</div>
      </section>
    </div>
  );
};

export default Project;
