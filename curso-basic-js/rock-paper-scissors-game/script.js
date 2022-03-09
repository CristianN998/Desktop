const toggleButton = document.getElementsByClassName("navbar__toggle")[0];
const navbarLinks = document.getElementsByClassName("nav__links")[0];

navbarLinks.style.transition = "all 1s ease-in-out";
toggleButton.addEventListener("click", () => {
    console.log("clicked");
    navbarLinks.classList.toggle("actived");
    toggleButton.classList.toggle("open");
});