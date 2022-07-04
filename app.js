const playBtn = document.querySelector('#btn')

const rollDiceBtn = document.querySelector('#rollDice')

let d1 = document.querySelector('#d1')
let d2 = document.querySelector('#d2')
let d3 = document.querySelector('#d3')
let d4 = document.querySelector('#d4')
let d5 = document.querySelector('#d5')
let d6 = document.querySelector('#d6')

const computerRoll = () => {
  const diceOne = (d1.innerHTML = Math.floor(Math.random() * 6 + 1))
  const diceTwo = (d2.innerHTML = Math.floor(Math.random() * 6 + 1))
  const diceThree = (d3.innerHTML = Math.floor(Math.random() * 6 + 1))
}
const playerRoll = () => {
  d4.innerHTML = Math.floor(Math.random() * 6 + 1)
  d5.innerHTML = Math.floor(Math.random() * 6 + 1)
  d6.innerHTML = Math.floor(Math.random() * 6 + 1)
}

playBtn.addEventListener('click', computerRoll)

rollDiceBtn.addEventListener('click', playerRoll)
