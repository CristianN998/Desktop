const toggleButton = document.getElementsByClassName("nav__toggle-button")[0];
const navbarLinks = document.getElementsByClassName("nav__links")[0];
const panels = document.querySelectorAll(".card");
const container = document.querySelectorAll(".gallery__title");

function nextPage() {
    document.getElementById("number").innerHTML = "02";
    document.getElementById("title").innerHTML = "INTERIORISMO";
    document.getElementById("text").innerHTML =
        "Look, just because I don't be givin' no man a foot massage don't make it right for Marsellus to throw Antwone into a glass motherfuckin' house, fuckin' up the way the nigger talks.";
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
        " Normally, both your asses would be dead as fucking fried chicken,but you happen to pull this shit while I'm in a transitional period";
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
setInterval(nextPage, 4999);
setInterval(firstPage, 10000);

panels.forEach((panel) => {
    panel.addEventListener("click", () => {
        removeActiveClasses();
        panel.classList.add("active");
    });
});

function removeActiveClasses() {
    panels.forEach((panel) => {
        panel.classList.remove("active");
    });
}

function changeBg() {
    const images = [
        "url('https://i.ibb.co/BPBrYCP/1.jpg')",
        "url('https://i.ibb.co/0ZZ9wrH/gallery-card-01-mobile-02.jpg')",
        "url('https://i.ibb.co/KsHHLmp/gallery-card-01-mobile-03.jpg')",
        "url('https://i.ibb.co/w6j7SXP/gallery-card-01-mobile-04.jpg')",
        "url('https://i.ibb.co/JytsMPX/gallery-card-01-mobile-05.jpg')",
    ];
    const container = document.querySelector(".card.active");
    const bg = images[Math.floor(Math.random() * images.length)];
    container.style.backgroundImage = bg;
    container.style.backgroundRepeat = "no-repeat";
    container.style.backgroundPosition = "center";
    container.style.backgroundSize = "center";
}
setInterval(changeBg, 2000);

navbarLinks.style.transition = "all 1s ease-in-out";
toggleButton.addEventListener("click", () => {
    console.log("clicked");
    navbarLinks.classList.toggle("active");
    toggleButton.classList.toggle("open");
});