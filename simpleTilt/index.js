let Card = document.querySelector(".card");
Card.addEventListener("mousemove", (e) => {
  let divHieght = Card.offsetHeight / 2;
  let divWidth = Card.offsetWidth / 2;
  let X = divWidth - e.offsetX;
  let Y = e.offsetY - divHieght;
  //new system
  let NX = e.offsetX - divWidth;
  let NY = divHieght - e.offsetY;
  if ((X > 0 && Y < 0) || (X < 0 && Y > 0)) {

    Card.style = `transform:rotateX(${NX / 10}deg) rotateY(${NY / 10}deg);`;
  } else {
    
    Card.style = `transform:rotateX(${X / 10}deg) rotateY(${Y / 10}deg);`;
  }
  // console.clear()
  // console.log(X +" Y "+Y);
});
// Card.addEventListener("mouseout", () => {
//   Card.style = `transform:rotateX(0deg) rotateY(0deg);`;
// });

let Outermouse = document.querySelector(".outerMous");
let innermouse = document.querySelector(".innerMous");

window.onmousemove = (e) => {
  let Xposition = e.clientX;
  let Yposition = e.clientY;
  innermouse.style = `top:${Yposition}px;left: ${Xposition}px ;`;

  Outermouse.animate(
    {
      top: `${Yposition}px `,
      left: `${Xposition}px`,
    },
    { duration: 500, fill: "forwards" }
  );
};
