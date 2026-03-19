const hamburger = document.querySelector(".hamburger");
console.log(hamburger);
const nav = document.querySelector(".nav");

hamburger.addEventListener("click", ()=> {
    nav.classList.toggle("active");
});

const links= document.querySelectorAll(".nav a");

links.forEach(link => {
    link.addEventListener("click", () => {
        nav.classList.remove("active");
    });
});