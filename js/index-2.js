const keuze1 = document.querySelector(".keuze-1");
const keuze2 = document.querySelector(".keuze-2");

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

    if (begin == length) {
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