const playBtn = document.querySelector('#btn')

const rollDiceBtn = document.querySelector('#rollDice')

let compStatus = document.querySelector('.compScore')

let d1 = document.querySelector('#d1')
let d2 = document.querySelector('#d2')
let d3 = document.querySelector('#d3')

let d4 = document.querySelector('#d4')
let d5 = document.querySelector('#d5')
let d6 = document.querySelector('#d6')

const computerRoll = () => {
  d1.innerHTML = Math.floor(Math.random() * 6 + 1)
  d2.innerHTML = Math.floor(Math.random() * 6 + 1)
  d3.innerHTML = Math.floor(Math.random() * 6 + 1)
  computerScore()
}
const playerRoll = () => {
  d4.innerHTML = Math.floor(Math.random() * 6 + 1)
  d5.innerHTML = Math.floor(Math.random() * 6 + 1)
  d6.innerHTML = Math.floor(Math.random() * 6 + 1)
}

const computerScore = () => {
  if (d1.innerHTML == d2.innerHTML && d2.innerHTML == d3.innerHTML) {
    compStatus.innerHTML = `Banker rolled triple ${d1.innerHTML}'s`
  } else if (d1.innerHTML == d2.innerHTML) {
    compStatus.innerHTML = `Banker rolled a ${d3.innerHTML}`
  } else if (d1.innerHTML == d3.innerHTML) {
    compStatus.innerHTML = `Banker rolled a ${d2.innerHTML}`
  } else if (d2.innerHTML == d3.innerHTML) {
    compStatus.innerHTML = `Banker rolled a ${d1.innerHTML}`
  }
}

playBtn.addEventListener('click', computerRoll)

rollDiceBtn.addEventListener('click', playerRoll)
