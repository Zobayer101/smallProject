

let textBox = document.querySelector(".card input");
let imgBox = document.querySelector('img');
let btn = document.querySelector("button");
let outerIMG = document.querySelector(".imgBox");
const QRcodeGenarator = () => {
    if (textBox.value.length > 0) {
        
        let url =
            "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=";
        imgBox.src = url + textBox.value;
        outerIMG.classList.add("show-img");
        textBox.classList.remove("blank");
    } else {
        outerIMG.classList.remove("show-img");
        textBox.classList.add("blank");
    }
    
    
}   
btn.addEventListener("click",()=>{QRcodeGenarator()})


