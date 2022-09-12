import "./Header.css";
import Dawood from "../assets/dawood.jpg";
import { AiOutlineClose } from "react-icons/ai";
import { FaLinkedinIn, FaGithub, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useState } from "react";
const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  return (
    <header className="header">
      <div className="container">
        <nav className="nav">
          <div className="logo" onClick={() => setIsNavOpen(!isNavOpen)}>
            Menu
          </div>
          <img src={Dawood} alt="" className="dawood" />

          <div className="social-links">
            <div className="socials">
              <FaLinkedinIn />
            </div>
            <div className="socials">
              <FaGithub />
            </div>

            <div className="socials">
              <FaTwitter />
            </div>
          </div>
          <div
            // className={
            //   isNavOpen ? "links-container show-links" : "links-container"
            // }
            className="links-wrapper"
          >
            {/* <div className="top">
            <img src={Dawood} alt="" className="dawood" />
            <div className="close" onClick={() => setIsNavOpen(false)}>
              <AiOutlineClose />
            </div>
          </div> */}
            <div className="lists">
              <a href="#about">About</a>
              <a href="#project">Project</a>

              <a href="#technology">Get In Touch</a>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
