import "./Header.css";
import Dawood from "../assets/dawood.jpg";
import { AiOutlineClose } from "react-icons/ai";
import { FaLinkedinIn, FaGithub, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { Link as HashLink } from "react-scroll";
const Header = ({ refer1 }: any) => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  if (isNavOpen) {
    document.body.style.overflowY = "hidden";
  }

  function navClosed() {
    setIsNavOpen(!isNavOpen);
    if (isNavOpen) {
      document.body.style.overflowY = "visible";
    }
    // setIsNavOpen(!isNavOpen);
  }

  // useEffect(() => {
  //   const option = {
  //     root: null,
  //     threshold: 0.5,
  //   };
  //   const observer = new IntersectionObserver((entries) => {
  //     const entry = entries[0];
  //     console.log(entry);
  //     setIsSticky(entry.isIntersecting);
  //   }, option);
  //   observer.observe(refer1.current);
  // }, []);

  return (
    <header className="header">
      <div className="container">
        <nav className="nav">
          <div
            className="logo"
            onClick={() => (isNavOpen ? navClosed() : setIsNavOpen(true))}
          >
            {isNavOpen ? "Close" : "Menu"}
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
            className={
              isNavOpen ? "links-wrapper show-links" : "links-wrapper "
            }
          >
            <div className="top">
              <div className="close" onClick={() => navClosed()}>
                <AiOutlineClose />
              </div>
            </div>
            <div className="lists">
              <HashLink
                to="about"
                spy={true}
                smooth={true}
                duration={1000}
                onClick={() => navClosed()}
              >
                About
              </HashLink>
              <HashLink
                to="project"
                spy={true}
                smooth={true}
                duration={1000}
                onClick={() => navClosed()}
              >
                Project
              </HashLink>

              <HashLink
                to="technology"
                spy={true}
                smooth={true}
                hashSpy={true}
                duration={1000}
                onClick={() => navClosed()}
              >
                Technologies
              </HashLink>
              <HashLink
                to="get-in-touch"
                spy={true}
                smooth={true}
                hashSpy={true}
                duration={1000}
                onClick={() => navClosed()}
              >
                Get In Touch
              </HashLink>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
