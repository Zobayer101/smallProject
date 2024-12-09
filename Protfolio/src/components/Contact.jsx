import "../CSS/Contact.css";
import { ImGithub } from "react-icons/im";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaDownload } from "react-icons/fa";
import { Dalivar } from "../App";
import { useContext } from "react";
import { MouseIN, MouseOut } from "../lib/Over";
export default function Contact() {
  const { Ring } = useContext(Dalivar);
  return (
    <div id="contact" className="contactSection">
      <div className="Pborder">
        <p>contact/&gt;</p>
      </div>
      <div className="mainSectionF">
        <div className="textSections">Find me on:</div>
        <div className="contentsSection">
          <div className="LinkText">
            <a href="https://github.com/Zobayer101">
              <ImGithub
                onMouseOver={() => MouseIN(Ring)}
                onMouseLeave={() => MouseOut(Ring)}
              />
              <p>GitHub</p>
            </a>
          </div>
          <div className="LinkText">
            <a href="#">
              <FaLinkedin
                onMouseOver={() => MouseIN(Ring)}
                onMouseLeave={() => MouseOut(Ring)}
              />
              <p>Linkedin</p>
            </a>
          </div>
          <div className="LinkText">
            <a href="https://web.facebook.com/mdzobayerhosen.habib">
              <FaFacebookSquare
                onMouseOver={() => MouseIN(Ring)}
                onMouseLeave={() => MouseOut(Ring)}
              />
              <p>Facebook</p>
            </a>
          </div>
          <div className="LinkText">
            <a href="https://www.instagram.com/mdzobayerhossenhabib/">
              <FaSquareInstagram
                onMouseOver={() => MouseIN(Ring)}
                onMouseLeave={() => MouseOut(Ring)}
              />
              <p>Instagram</p>
            </a>
          </div>
        </div>
        <div className="btnSection">
          <button
            onMouseOver={() => MouseIN(Ring)}
            onMouseLeave={() => MouseOut(Ring)}
          >
            <a href="/src/assets/mdzobayer.pdf" download={true}>
              Resume <FaDownload />
            </a>
          </button>
        </div>
      </div>
    </div>
  );
}
