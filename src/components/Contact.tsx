import "./Contact.css";
import { FaLinkedinIn, FaInstagram, FaGithub, FaTwitter } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="container">
      <footer className="footer">
        <h1>📞Get In Touch With Me🤝🏼</h1>

        <a href="" className="gmail">
          sulaimondawood@gmail.com 📞
        </a>
        <div className="social-link">
          <a
            href="https://www.linkedin.com/in/sulaimon-dauda-23739823b/"
            rel="noreferrer"
            className="social"
          >
            <FaLinkedinIn />
          </a>
          <a
            href="https://github.com/sulaimondawood"
            rel="noreferrer"
            className="social"
          >
            <FaGithub />
          </a>

          <a
            href="https://twitter.com/Dawood_Tech"
            rel="noreferrer"
            className="social"
          >
            <FaTwitter />
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Contact;
