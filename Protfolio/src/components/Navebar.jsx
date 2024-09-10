import { useState } from "react";
import "../CSS/Navebar.css";
import { HiBars3CenterLeft } from "react-icons/hi2";
const Navebar = () => {
  const [icon, setIcon] = useState(true);
 
  return (
    <div>
      <div className="navebar">
        <div className="logo">
          <span>&lt;</span>Zobayer<span>/&gt;</span>
        </div>
        <div className={icon ? "section" : "section showBar"}>
          <a href="#home">Start/&gt;</a>
          <a href="#project">Project/&gt;</a>
          <a href="#about">About/&gt;</a>
          <a href="#">Contact/&gt;</a>
        </div>
        <div className="icon" onClick={() => setIcon((icon) => !icon)}>
          <HiBars3CenterLeft />
        </div>
      </div>
    </div>
  );
};
export default Navebar;
