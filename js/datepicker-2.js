// URL
const baseUrl = "https://www.ns.nl/reisplanner/#/?";
const container = document.querySelector(".container");
const container2 = document.querySelector(".container-2");
const maand1 = document.querySelector(".maand-1");
const maand2 = document.querySelector(".maand-2");

const lookup = {
    4: 30,
    5: 31,
    6: 30,
    7: 31,
    8: 31,
    9: 30,
    10: 31,
    11: 30,
    12: 31
};

const daynames = {
    0: "Zondag",
    1: "Maandag",
    2: "Dinsdag",
    3: "Woensdag",
    4: "Donderdag",
    5: "Vrijdag",
    6: "Zaterdag",
};

const focusElements = [];

const monthNames = [
    "januari",
    "februari",
    "maart",
    "april",
    "mei",
    "juni",
    "juli",
    "augustus",
    "september",
    "oktober",
    "november",
    "december",
];

let begin = 0;
let className = 1;

// Tijden
const today = new Date();

const month = today.getMonth() + 1;
const hours = today.getHours() + 1;

const time = `${hours}:${today.getMinutes()}`;

let day = today.getDate();
let currentdayNumber = today.getDay();
let test = currentdayNumber;

const year = today.getFullYear();

const checkMonth = () => {
    Object.keys(lookup).forEach((key) => {
        if (parseInt(key) === month) {
            maand1.textContent = monthNames[parseInt(key) - 1];
            for (let i = day; i <= lookup[key]; i++) {
                fillIn(container, year, month, day);
                day++;
            }
        }
    });

    day = today.getDate();
    const diffrent = day - 12;

    if (diffrent > 0) {
        Object.keys(lookup).forEach((key) => {
            if (parseInt(key) === month + 1) {
                day = 1;
                maand2.textContent = monthNames[parseInt(key) - 1];
                for (let i = 0; i < diffrent; i++) {
                    fillIn(container2, year, month + 1, day);
                    day++;
                }
            }
        });
    }
};

window.onload = () => {
    checkMonth();
};

const fillIn = (container, year, month, day) => {
    const node = document.createElement("a");
    node.setAttribute(
        "href",
        `${baseUrl}vertrek=Eindhoven%20Centraal&vertrektype=treinstation&aankomst=Amsterdam%20Centraal&aankomsttype=treinstation&type=vertrek&tijd=${year}-${month}-${day}-T${time}`
    );
    node.target = "_blank";
    node.className = `datum`;
    node.id = className;

    for (const [key, value] of Object.entries(daynames)) {
        if (parseInt(key) === test) {
            node.innerText = `${day} ${value}`;
        }
    }
    test++;

    if (test === 7) {
        test = 0;
    }
    container.appendChild(node);
    focusElements.push(`${className}`);
    className++;
};

window.addEventListener("keydown", function(event) {
    const keycode = event.keyCode;
    const length = focusElements.length;

    if (keycode === 74) {
        if (begin == length) {
            begin = 0;
        }
        document.getElementById(`${focusElements[begin]}`).focus();
        begin++;
    }

    if (keycode === 72) {
        begin = begin - 1;
        if (begin + 1 === 0 || begin < 0) {
            begin = 19;
            return begin;
        }
        document.getElementById(`${focusElements[begin]}`).focus();
    }
});
