import "../CSS/Home.css";
import { PiMouseSimpleThin } from "react-icons/pi";
import { Dalivar } from "../App";
import { useContext, useEffect, useState } from "react";
import { MouseIN, MouseOut } from "../lib/Over";
const Home = () => {
  const { Ring } = useContext(Dalivar);
  // const [index, setIndex] = useState(0);
  // const [text, setText] = useState("");
  const [currentText, setCurrentText] = useState("");
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [currentLetterIndex, setCurrentLetterIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  //const [ms, setMs] = useState(1000);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const phrases = [
    "UI/UX",
    "Fontend",
    "Backend",
    "android",
    "IOS",
    "FullStack",
  ];

  const typingSpeed = 200;
  const deletingSpeed = 80;
  const pauseBetweenPhrases = 1000;

  useEffect(() => {
    const type = () => {
      const currentPhrase = phrases[currentPhraseIndex];

      if (isDeleting) {
        // Remove letters
        setCurrentText(currentPhrase.substring(0, currentLetterIndex - 1));
        setCurrentLetterIndex((prev) => prev - 1);

        if (currentLetterIndex === 0) {
          setIsDeleting(false);
          setCurrentPhraseIndex((prev) => (prev + 1) % phrases.length); // Move to the next phrase
        }
      } else {
        // Add letters
        setCurrentText(currentPhrase.substring(0, currentLetterIndex + 1));
        setCurrentLetterIndex((prev) => prev + 1);

        if (currentLetterIndex === currentPhrase.length) {
          setIsDeleting(true);
        }
      }
    };

    const timeout = setTimeout(
      type,
      isDeleting
        ? deletingSpeed
        : currentLetterIndex === phrases[currentPhraseIndex]?.length
        ? pauseBetweenPhrases
        : typingSpeed
    );

    return () => clearTimeout(timeout);
  }, [currentLetterIndex, isDeleting, currentPhraseIndex, phrases]); // Dependencies
  // useEffect(() => {
  //   const arr = ["UI/UX", "Fontend", "Backend", "android", "ISO", "FullStack"];

  //   if (arr.length > index) {
  //     setText(arr[index]);
  //   } else {
  //     setIndex(0);
  //   }

  //   let InterVal = setInterval(() => {
  //     setIndex(index + 1);
  //   }, 1000);

  //   return () => {
  //     clearInterval(InterVal);
  //   };
  // }, [index, text]);

  return (
    <div>
      <div id="home" className="countuner">
        <div className="border">
          <a href="#project">
            <PiMouseSimpleThin
              className="scrollIcon"
              onMouseOver={() => MouseIN(Ring)}
              onMouseLeave={() => MouseOut(Ring)}
            />
          </a>
          <span className="scrolltext">scroll</span>
        </div>
        <div className="mainPropaty">
          <div className="writer">
            <div className="writerCard">
              <div className="startText">Start/&gt;</div>
              <div className="myname">
                Hi, my name is <span>Md Zobayer hosen</span>
              </div>
              <div className="writerWrite">
                {" "}
                I <span>design </span>and <span className="dev">develop</span>{" "}
                <span></span>
                <span></span>
                <span className="normal">{currentText}</span>
                <span></span>
                <span></span>
                <span></span>
              </div>
              <p>Let me show you....</p>
            </div>
          </div>
          <div className="IMG"></div>
        </div>
      </div>
    </div>
  );
};
export default Home;
