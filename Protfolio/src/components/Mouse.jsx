
import { useEffect, useRef } from "react";
import "../CSS/Mouse.css";

const Mouse = () => {
    let move = useRef();
    let Ring = useRef();
    useEffect(() => {
        window.addEventListener('mousemove', (e) => {
            let X = e.clientX;
            let Y = e.clientY;
            move.current.style = `left:${X}px;top:${Y}px`;
            
            Ring.current.animate(
                {
                    top: `${Y}px `,
                    left: `${X}px`,
                },
                { duration: 1000, fill: "forwards" }
            )
        })
    }, []);
    return (
      <div>
        <div  ref={Ring} className="outerRing">
          <div ref={move} className="innerDot"></div>
        </div>
      </div>
    );
}

export default Mouse;