const toggleButton = document.getElementsByClassName("nav__toggle-button")[0];
const navbarLinks = document.getElementsByClassName("nav__links")[0];
const panels = document.querySelectorAll(".card");
const container = document.querySelectorAll(".gallery__title");

function nextPage() {
    document.getElementById("number").innerHTML = "02";
    document.getElementById("title").innerHTML = "INTERIORISMO";
    document.getElementById("text").innerHTML =
        "te ayudamos a realizar tus ideas y proyectos, sin excusas, sin trabas, puntuales y siempre atento a lo que tu necesitas";
    const square01 = document.getElementById("change-image-01");
    const square02 = document.getElementById("change-image-02");
    const square03 = document.getElementById("change-image-03");
    const bg = document.getElementById("first");
    bg.style.background = 'url("https://i.ibb.co/fHtc5H0/fondo-2.jpg")';
    bg.style.backgroundRepeat = "no-repeat";
    bg.style.backgroundSize = "cover";
    bg.style.backgroundPosition = "center";
    square01.style.background =
        'url("https://i.ibb.co/Fq17crh/fondo-2-no-blur-1.png")';
    square02.style.background =
        'url("https://i.ibb.co/99pNPGy/fondo-2-no-blur-2.png")';
    square03.style.background =
        'url("https://i.ibb.co/n10zt7F/fondo-2-no-blur-3.png")';
    square01.style.backgroundRepeat = "no-repeat";
    square01.style.backgroundSize = "cover";
    square01.style.backgroundPosition = "center";
    square02.style.backgroundRepeat = "no-repeat";
    square02.style.backgroundSize = "cover";
    square02.style.backgroundPosition = "center";
    square03.style.backgroundRepeat = "no-repeat";
    square03.style.backgroundSize = "cover";
    square03.style.backgroundPosition = "center";
}

function firstPage() {
    document.getElementById("number").innerHTML = "01";
    document.getElementById("title").innerHTML = "CONSTRUCCIÓN";
    document.getElementById("text").innerHTML =
        "   Enchapes, mamposteria, estucados, techos pvc, ormamentación, estructuras, plomeria y más, ofrecemos calidad al precio adecuado";
    const square01 = document.getElementById("change-image-01");
    const square02 = document.getElementById("change-image-02");
    const square03 = document.getElementById("change-image-03");
    const bg = document.getElementById("first");
    bg.style.background = 'url("https://i.ibb.co/B28zt3c/FONDO.png")';
    bg.style.backgroundRepeat = "no-repeat";
    bg.style.backgroundSize = "cover";
    bg.style.backgroundPosition = "center";
    square01.style.background =
        'url("https://i.ibb.co/k4KCcMc/fondo-no-blur-1.png")';
    square02.style.background =
        'url("https://i.ibb.co/vJTFy9P/fondo-no-blur-2.png")';
    square03.style.background =
        'url("https://i.ibb.co/qmJ1jXY/fondo-no-blur-3.png")';
    square01.style.backgroundRepeat = "no-repeat";
    square01.style.backgroundSize = "cover";
    square01.style.backgroundPosition = "center";
    square02.style.backgroundRepeat = "no-repeat";
    square02.style.backgroundSize = "cover";
    square02.style.backgroundPosition = "center";
    square03.style.backgroundRepeat = "no-repeat";
    square03.style.backgroundSize = "cover";
    square03.style.backgroundPosition = "center";
}
var homePage = document.getElementById("first");
if (homePage) {
    setInterval(nextPage, 4999);
    setInterval(firstPage, 10000);
}

panels.forEach((panel) => {
    panel.addEventListener("click", () => {
        removeActiveClasses();
        panel.classList.add("active");
        panel.setAttribute("id", "expand");
    });
});

function removeActiveClasses() {
    panels.forEach((panel) => {
        panel.classList.remove("active");
    });
}

function changeBg() {
    const images = [
        "url('https://i.ibb.co/Sv7CPrf/galeria-images-00.jpg')",
        "url('https://i.ibb.co/0XvvBLp/galeria-images-01.jpg')",
        "url('https://i.ibb.co/H4YJXMb/galeria-images-02.jpg')",
        "url('https://i.ibb.co/Rptp0N3/galeria-images-03.jpg')",
        "url('https://i.ibb.co/PrqH9Sh/galeria-images-04.jpg')",
        "url('https://i.ibb.co/3kLcX9W/galeria-images-05.jpg')",
        "url('https://i.ibb.co/F04VXy8/galeria-images-06.jpg')",
        "url('https://i.ibb.co/yYGT2PB/galeria-images-07.jpg')",
        "url('https://i.ibb.co/x8H1kH5/galeria-images-08.jpg')",
        "url('https://i.ibb.co/cJQKn89/galeria-images-09.jpg')",
    ];
    const container = document.querySelector(".card.active");
    const bg = images[Math.floor(Math.random() * images.length)];
    container.style.backgroundImage = bg;
    container.style.backgroundRepeat = "no-repeat";
    container.style.backgroundPosition = "center";
    container.style.backgroundSize = "center";
}

if (homePage) {
    setInterval(changeBg, 5000);
}
navbarLinks.style.transition = "all 1s ease-in-out";
toggleButton.addEventListener("click", () => {
    console.log("clicked");
    navbarLinks.classList.toggle("actived");
    toggleButton.classList.toggle("open");
});