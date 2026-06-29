const slides = document.querySelectorAll(".slide");

let slideAtual = 0;

function trocarSlide() {
    if (slides.length === 0) return;

    slides[slideAtual].classList.remove("ativo");

    slideAtual = (slideAtual + 1) % slides.length;

    slides[slideAtual].classList.add("ativo");
}

if (slides.length > 1) {
    setInterval(trocarSlide, 3000);
}

const menuHamburguer = document.querySelector("#menuHamburguer");
const nav = document.querySelector(".nav");

menuHamburguer.addEventListener("click", () => {
    nav.classList.toggle("ativo");
});