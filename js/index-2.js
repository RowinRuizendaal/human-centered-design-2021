const keuze1 = document.querySelector(".keuze-1");
const keuze2 = document.querySelector(".keuze-2");
const footer = document.querySelector("footer");

const focusElements = ["keuze-1", "keuze-2", "keuze-3"];
let begin = 0;

// URL
const baseUrl = "https://www.ns.nl/reisplanner/#/?";

// Tijden
const today = new Date();
const date = `${today.getFullYear()}-${
  today.getMonth() + 1
}-${today.getDate()}`;
const hours = today.getHours() + 1;
const time = `${hours}:${today.getMinutes()}`;

window.addEventListener("keydown", function(event) {
    const keycode = event.keyCode;
    const length = focusElements.length;

    if (begin === length) {
        begin = 0;
    }

    if (keycode === 74) {
        document.getElementsByClassName(`${focusElements[begin]}`)[0].focus();
        begin++;
    }
});

window.onload = () => {
    keuze1.href = `${baseUrl}vertrek=Eindhoven%20Centraal&vertrektype=treinstation&aankomst=Amsterdam%20Centraal&aankomsttype=treinstation&type=vertrek&tijd=${date}-T${time}`;
    keuze2.href = `${baseUrl}vertrek=Amsterdam%20Centraal&vertrektype=treinstation&aankomst=Eindhoven%20Centraal&aankomsttype=treinstation&type=vertrek&tijd=${date}-T${time}`;
};

console.log(
    "%c 🤘 Marijn is awesome! 🤘",
    "font-weight: bold; font-size: 50px;color: red; text-shadow: 3px 3px 0 rgb(217,31,38) , 6px 6px 0 rgb(226,91,14) , 9px 9px 0 rgb(245,221,8) , 12px 12px 0 rgb(5,148,68) , 15px 15px 0 rgb(2,135,206) , 18px 18px 0 rgb(4,77,145) , 21px 21px 0 rgb(42,21,113)"
);

const audio = new Audio("../../assets/sound.mp3");
// audio.play();

footer.onmouseover = () => {
    audio.play();
};

footer.onmouseout = () => {
    audio.pause();
    audio.currentTime = 0;
};