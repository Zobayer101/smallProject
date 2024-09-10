import { useEffect, useRef } from "react"


// eslint-disable-next-line react/prop-types
export default function Tilt({ img }) {
  const Select = useRef();
  useEffect(() => {
    Select.current.addEventListener('mousemove', (e) => {
      let H = (Select.current.offsetHeight)/2;
      let W = (Select.current.offsetWidth)/2;
      let X =( e.offsetX-W)/5;
      let Y = (e.offsetY-H)/5;
      Select.current.style = `transform:rotateX(${X}deg) rotateY(${Y}deg);`;
      // console.log(H + " " + W);
      console.clear()
      console.log(X+" "+Y);
    })
    Select.current.addEventListener('mouseout', () => {
    Select.current.style=`transform:''`
  })
  }, []);
  
  return (
      <div ref={Select}>
         <img src={img} />
    </div>
  )
}

