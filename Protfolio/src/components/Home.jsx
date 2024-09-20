import "../CSS/Home.css";
import { PiMouseSimpleThin } from "react-icons/pi";
import { Dalivar } from "../App";
import { useContext, useEffect, useState } from "react";
import { MouseIN, MouseOut } from "../lib/Over";
const Home = () => {
  const { Ring } = useContext(Dalivar);
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  //const [ms, setMs] = useState(1000);

  useEffect(() => {
    const arr = ["UI/UX", "Fontend", "Backend", "android", "ISO", "FullStack"];

    if (arr.length > index) {
      setText(arr[index]);
    } else {
      setIndex(0);
    }

    let InterVal = setInterval(() => {
      setIndex(index + 1);
    }, 1000);

    return () => {
      clearInterval(InterVal);
    };
  }, [index, text]);

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
                <span className="normal">{text}</span>
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
