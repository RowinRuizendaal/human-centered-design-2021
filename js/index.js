const buttons = document.querySelectorAll('.antwoord')
const skip = document.querySelector('.skip')
const quiz = document.querySelector('.quiz')
const container = document.querySelector('.container')
const awnser = document.querySelector('.awnser')
const planner = document.querySelector('.planner')
const keuze1 = document.querySelector('.keuze-1')
const keuze2 = document.querySelector('.keuze-2')



// URL
const baseUrl = 'https://www.ns.nl/reisplanner/#/?'

// Tijden
const today = new Date();
const date = `${today.getFullYear()}-${today.getMonth() + 1}-${today.getDate()}`
const hours = today.getHours() + 1
const time = `${hours}:${today.getMinutes()}`



buttons.forEach((el) => {
    el.addEventListener('click', () => {

        if (el.dataset.id === '3') {
            awnser.className = 'correct'
            return awnser.textContent = 'Dat was het goede antwoord!'
        }
        awnser.className = 'wrong'
        awnser.textContent = 'Helaas was dat niet goed, probeer opnieuw'


    })
})

skip.addEventListener('click', () => {
    quiz.style.display = 'none'
    planner.style.display = 'block'

    keuze1.href = `${baseUrl}vertrek=Eindhoven%20Centraal&vertrektype=treinstation&aankomst=Amsterdam%20Centraal&aankomsttype=treinstation&type=vertrek&tijd=${date}-T${time}`
    keuze2.href = `${baseUrl}vertrek=Amsterdam%20Centraal&vertrektype=treinstation&aankomst=Eindhoven%20Centraal&aankomsttype=treinstation&type=vertrek&tijd=${date}-T${time}`
})