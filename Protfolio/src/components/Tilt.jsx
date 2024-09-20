import { useContext, useEffect, useRef } from "react"
import { Dalivar } from "../App";
import { MouseIN, MouseOut } from "../lib/Over";
import "../CSS/tilt.css";
// eslint-disable-next-line react/prop-types
export default function Tilt({ img }) {
  const Select = useRef();
  // const Text = useRef();
  const { Ring } = useContext(Dalivar);
  useEffect(() => {
    Select.current.addEventListener('mousemove', (e) => {
      let H = (Select.current.offsetHeight)/2;
      let W = (Select.current.offsetWidth)/2;
      let X =( e.offsetX-W)/5;
      let Y = (e.offsetY-H)/5;
      Select.current.style = `transform:rotateX(${X}deg) rotateY(${Y}deg);`;
      // Text.current.style = `transform:rotateX(${X}deg) rotateY(${Y}deg);`;
      // console.log(H + " " + W);
     
    })
    Select.current.addEventListener('mouseout', () => {
    Select.current.style=`transform:''`
  })
  }, []);
  
  return (
    <div
      className="TiltDiv"
      ref={Select}
      onMouseOver={() => MouseIN(Ring)}
      onMouseLeave={() => MouseOut(Ring)}
    >
      <h1 >Hello world</h1>
      <img src={img} />
    </div>
  );
}

