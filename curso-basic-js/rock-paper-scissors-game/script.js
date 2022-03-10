const toggleButton = document.getElementsByClassName("navbar__toggle")[0];
const navbarLinks = document.getElementsByClassName("nav__links")[0];

navbarLinks.style.transition = "all 1s ease-in-out";
toggleButton.addEventListener("click", () => {
    console.log("clicked");
    navbarLinks.classList.toggle("actived");
    toggleButton.classList.toggle("open");
});
const closeButton = document.getElementById("close-button");
const playButton = document.getElementById("play-button");
var playerText = document.getElementById("player-chose");
var cpuText = document.getElementById("cpu-chose");
const alertDisplay = document.getElementById("alert");
const alertTitle = document.getElementById("alert-title");
const alertText = document.getElementById("alert-text");
var scorePlayer = document.getElementById("player-score");
var scoreCpu = document.getElementById("cpu-score");
var pointsCpu = 0;
var pointsPlayer = 0;

var choseImg = [
    "url('https://svgur.com/i/f1r.svg')",
    "url('https://svgur.com/i/f2o.svg')",
    "url('https://svgur.com/i/f2M.svg')",
    "url('https://svgur.com/i/f2N.svg')",
    "url('https://svgur.com/i/f3F.svg')",
    "url('https://svgur.com/i/f2g.svg')",
];

playButton.addEventListener("click", startGame);
closeButton.addEventListener("click", () => {
    playButton.classList.remove("disabled");
});

function startGame() {
    var choseCPU = ["SCISSORS", "ROCK", "PAPER"];
    var cpu = choseCPU[Math.floor(Math.random() * choseCPU.length)];
    var player = playerText.value.toUpperCase();
    cpuText.value = cpu;
    console.log(cpu);
    console.log(player);

    switch (true) {
        case player === cpu:
            console.log("It's a draw");
            alertDisplay.classList.remove("error");
            alertDisplay.classList.remove("valid");
            alertDisplay.classList.add("draw");
            alertDisplay.style.display = "flex";
            alertTitle.innerHTML = "IT'S A DRAW!";
            alertText.innerHTML = "You both chose " + cpu;

            playButton.classList.add("disabled");
            break;

        case (player === "SCISSORS" && cpu === "PAPER") ||
        (player === "PAPER" && cpu === "ROCK") ||
        (player === "ROCK" && cpu === "SCISSORS"):
            console.log("Player won!");
            pointsPlayer += 1;
            scorePlayer.innerHTML = String(pointsPlayer);
            alertDisplay.classList.remove("error");
            alertDisplay.classList.remove("draw");
            alertDisplay.classList.add("valid");
            alertDisplay.style.display = "flex";
            alertTitle.innerHTML = "YOU WON!";
            alertText.innerHTML = "Computer chose " + cpu;
            playButton.classList.add("disabled");

            break;

        case (player === "PAPER" && cpu === "SCISSORS") ||
        (player === "ROCK" && cpu === "PAPER") ||
        (player === "SCISSORS" && cpu === "ROCK"):
            console.log("CPU won!");
            pointsCpu += 1;
            scoreCpu.innerHTML = String(pointsCpu);

            alertDisplay.classList.remove("draw");
            alertDisplay.classList.remove("valid");
            alertDisplay.classList.add("error");
            alertDisplay.style.display = "flex";
            playButton.classList.add("disabled");
            alertTitle.innerHTML = "YOU LOST!";
            alertText.innerHTML = "Computer chose " + cpu;

            break;
        default:
            console.log("default");
            break;
    }

    if (player === "") {
        cpuText.value = "";
        alertDisplay.classList.remove("draw");
        alertDisplay.classList.remove("valid");
        alertDisplay.classList.add("error");
        alertDisplay.style.display = "flex";
        playButton.classList.add("disabled");
    }
}