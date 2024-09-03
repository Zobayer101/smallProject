let Card = document.querySelector(".card");
Card.addEventListener("mousemove", (e) => {
  let divHieght = Card.offsetHeight / 2;
  let divWidth = Card.offsetWidth / 2;
  let X = e.offsetX - divWidth;
  let Y = e.offsetY - divHieght;
  Card.style = `transform:rotateX(${X / 10}deg) rotateY(${Y / 10}deg);`;
});
Card.addEventListener("mouseout", () => {
  Card.style = `transform:rotateX(0deg) rotateY(0deg);`;
});

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
