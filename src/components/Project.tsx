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
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci
              molestiae ab, exercitationem unde debitis alias in tempora placeat
              aperiam incidunt.
            </p>
            <a href="">Visit Site </a>
          </div>
        </div>
        <div className="project-wrp wrp-2">
          <div className="second first">
            <img src={Gym} alt="" />
          </div>
          <div className="desc-wrp">
            <p className="p-desc">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci
              molestiae ab, exercitationem unde debitis alias in tempora placeat
              aperiam incidunt.
            </p>
            <a href="">Visit Site </a>
          </div>
        </div>
        <div className="overlay p-stroke">PROJECTS</div>
        <div className="overlay p-stroke-l">PROJECTS</div>
      </section>
    </div>
  );
};

export default Project;
