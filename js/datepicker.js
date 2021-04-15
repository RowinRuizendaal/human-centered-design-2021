// URL
const baseUrl = 'https://www.ns.nl/reisplanner/#/?'

// Tijden
const today = new Date();
const date = `${today.getFullYear()}-${today.getMonth() + 1}-${today.getDate()}`
const hours = today.getHours() + 1
const time = `${hours}:${today.getMinutes()}`


let year = today.getFullYear()
let month = today.getMonth() + 1
let day = today.getDate()



const container = document.querySelector('.container')


window.onload = () => {
    for (let index = 1; index < 31; index++) {
        fillin(index, year, month, index)
    }
}

const fillin = (index, year, month, day) => {
    const node = document.createElement('a')
    node.setAttribute('href', `${baseUrl}vertrek=Eindhoven%20Centraal&vertrektype=treinstation&aankomst=Amsterdam%20Centraal&aankomsttype=treinstation&type=vertrek&tijd=${year}-${month}-${day}-T${time}`)
    node.target = '_blank';
    node.className = 'datum'
    node.innerText = index
    container.appendChild(node)
}