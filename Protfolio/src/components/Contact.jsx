
import "../CSS/Contact.css";
import { ImGithub } from "react-icons/im";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";

export default function Contact() {
  return (
    <div id="contact" className="contactSection">
      <div className="Pborder">
        <p>contact/&gt;</p>
      </div>
      <div className="mainSectionF">
        <div className="textSections">Find me on:</div>
        <div className="contentsSection">
          <div className="LinkText">
            <a href="#">
              <ImGithub />
              <p>GitHub</p>
            </a>
          </div>
          <div className="LinkText">
            <a href="#">
              <FaLinkedin />
              <p>Linkedin</p>
            </a>
          </div>
          <div className="LinkText">
            <a href="#">
              <FaFacebookSquare />
              <p>Facebook</p>
            </a>
          </div>
          <div className="LinkText">
            <a href="#">
              <FaSquareInstagram />
              <p>Instagram</p>
            </a>
          </div>
        </div>
        <div className="btnSection">
          <button>Get In Touch</button>
        </div>
      </div>
    </div>
  );
}

