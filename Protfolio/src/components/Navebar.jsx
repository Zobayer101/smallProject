import { useContext, useState } from "react";
import "../CSS/Navebar.css";
import { HiBars3CenterLeft } from "react-icons/hi2";
import { Dalivar } from "../App";
import { MouseIN, MouseOut } from "../lib/Over";
const Navebar = () => {
  const [icon, setIcon] = useState(true);
  const { bar, Ring } = useContext(Dalivar);

  return (
    <div>
      <div className={bar ? "navebar" : "navebar Hide"}>
        <div
          className="logo"
          onMouseOver={() => MouseIN(Ring)}
          onMouseLeave={() => MouseOut(Ring)}
        >
          <span>&lt;</span>Zobayer<span>/&gt;</span>
        </div>
        <div className={icon ? "section" : "section showBar"}>
          <a
            onMouseOver={() => MouseIN(Ring)}
            onMouseLeave={() => MouseOut(Ring)}
            href="#home"
          >
            Start/&gt;
          </a>
          <a
            onMouseOver={() => MouseIN(Ring)}
            onMouseLeave={() => MouseOut(Ring)}
            href="#project"
          >
            Project/&gt;
          </a>
          <a
            onMouseOver={() => MouseIN(Ring)}
            onMouseLeave={() => MouseOut(Ring)}
            href="#about"
          >
            About/&gt;
          </a>
          <a
            onMouseOver={() => MouseIN(Ring)}
            onMouseLeave={() => MouseOut(Ring)}
            href="#contact"
          >
            Contact/&gt;
          </a>
        </div>
        <div className="icon" onClick={() => setIcon((icon) => !icon)}>
          <HiBars3CenterLeft />
        </div>
      </div>
    </div>
  );
};
export default Navebar;
