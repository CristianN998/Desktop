const toggleButton = document.getElementsByClassName("nav__toggle-button")[0];
const navbarLinks = document.getElementsByClassName("nav__links")[0];
const panels = document.querySelectorAll(".card");
const container = document.querySelectorAll(".gallery__title");
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
