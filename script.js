document.addEventListener("DOMContentLoaded", () => {
    let previousScrollY = window.scrollY;
    window.addEventListener("scroll", () => {
        let currentScrollY = window.scrollY;
        if (previousScrollY > currentScrollY) {
            document.querySelector(".header").style.top = '0';
        } else {
            document.querySelector(".header").style.top = "-7vh";
            document.querySelector(".header").addEventListener("mouseover", () => {
                document.querySelector(".header").style.top = "0vh";
            })
        }
        previousScrollY = currentScrollY;
    });



    document.querySelector(".menu").addEventListener("click", ()=>{
        document.querySelector(".nav-bar").classList.add("active")
    })
    document.querySelector(".close").addEventListener("click", ()=>{
        document.querySelector(".nav-bar").classList.remove("active")
    })
    document.querySelectorAll(".element").forEach((element)=>{
        element.addEventListener("click", ()=>{
            document.querySelector(".nav-bar").classList.remove("active")
        })
    })
});
 