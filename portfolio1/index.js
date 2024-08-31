
//appiarance change
let mode = document.querySelector(".apiarance i");
let Body = document.querySelector("body");

    mode.addEventListener("click", () => {
        let result = mode.classList.contains("fa-sun");
        if (result) {
            mode.classList.add("fa-moon");
            mode.classList.remove("fa-sun");
            Body.classList.add("drack");
        } else {
            Body.classList.remove("drack");
            mode.classList.add("fa-sun");
            mode.classList.remove("fa-moon");
            
        }
});

