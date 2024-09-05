
let Div = document.querySelector(".outerdiv");


    Div.addEventListener("mousemove", (e) => {
      let X = e.offsetX;
      let Y = e.offsetY;
      let H = Div.clientHeight ;
      let W = Div.clientWidth;
      let movex = (X - W/2);
      let movey = (Y - H/2);
      Div.style = ` transform: translateX(${movex}px) translateY(${movey}px);`;
      console.log(X , Y , H, W);
      // alert("ok")
    });
Div.addEventListener("mouseout", () => {
      Div.style=''
    })



