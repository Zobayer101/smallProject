
let section = document.querySelectorAll(".section");

window.onscroll = () => {
    section.forEach(sec => {
        let maxHeight = sec.offsetTop;
        let scrolling = window.scrollY+200;
        let divDiffarance = sec.offsetHeight;
        console.log(divDiffarance);
        if (scrolling >= maxHeight && scrolling < maxHeight + divDiffarance) {
            sec.classList.add("animation-ok");
        } else {
            sec.classList.remove("animation-ok");
            
        }
    })
}
