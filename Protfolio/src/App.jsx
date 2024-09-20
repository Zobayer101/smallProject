import { createContext, useEffect, useRef, useState } from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
//import Mouse from "./components/Mouse";
import Navebar from "./components/Navebar";
import Project from "./components/Project";
import "./CSS/Mouse.css";
export const Dalivar = createContext();
function App() {
  const [bar, setBar] = useState(true);
  const [scroll, setScroll] = useState(100);
  //const [active, setActive] = useState("");
  let move = useRef();
  let Ring = useRef();
  const ref = useRef();
  useEffect(() => {
    window.addEventListener("scroll", () => {
      let Y = window.scrollY;
      if (scroll < Y) {
        setBar(false);
        setScroll(Y);
      } else {
        setBar(true);
      }

    });
  }, [scroll]);

  useEffect(() => {
    window.addEventListener("mousemove", (e) => {
      let X = e.clientX;
      let Y = e.clientY;
      move.current.style = `left:${X}px;top:${Y}px`;

      Ring.current.animate(
        {
          top: `${Y-8}px `,
          left: `${X-8}px`,
        },
        { duration: 1000, fill: "forwards" }
      );
    });
  }, [move, Ring]);

  return (
    <div ref={ref}>
      <Dalivar.Provider value={{ bar, setBar, move, Ring }}>
        <div ref={Ring} className="outerRing">
        </div>
          <div ref={move} className="innerDot"></div>
        
        <Navebar />
        <Home />
        <Project />
        <About />
        <Contact />
      </Dalivar.Provider>
    </div>
  );
}

export default App;
