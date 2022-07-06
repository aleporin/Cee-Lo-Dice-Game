const playBtn = document.querySelector('#btn')

const rollDiceBtn = document.querySelector('#rollDice')

let compStatus = document.querySelector('.compScore')

let playerStatus = document.querySelector('.playerScore')

let compDice = []
let playerDice = []

let d1 = document.querySelector('#d1')
let d2 = document.querySelector('#d2')
let d3 = document.querySelector('#d3')

let d4 = document.querySelector('#d4')
let d5 = document.querySelector('#d5')
let d6 = document.querySelector('#d6')

let gameOver = false

let heiarchy = [
  '1-2-3',
  '1',
  '2',
  '3',
  '4',
  '5',
  '6',
  '1-1-1',
  '2-2-2',
  '3-3-3',
  '4-4-4',
  '5-5-5',
  '6-6-6',
  '4-5-6'
]

const computerRoll = () => {
  d1.innerHTML = Math.floor(Math.random() * 6 + 1)
  // d1 and add class name for respective dice background image d1.className = BG + d1.innerHTML
  d2.innerHTML = Math.floor(Math.random() * 6 + 1)
  d3.innerHTML = Math.floor(Math.random() * 6 + 1)
  compDice = []
  compDice.push(d1.innerHTML, d2.innerHTML, d3.innerHTML)
  compDice = compDice.sort()
  setTimeout(computerScore, 1500)
}

const computerScore = () => {
  console.log(compDice)
  if (d1.innerHTML == d2.innerHTML && d2.innerHTML == d3.innerHTML) {
    compStatus.innerHTML = `Banker rolled triple ${d1.innerHTML}'s`
  } else if (d1.innerHTML == d2.innerHTML) {
    compStatus.innerHTML = `Banker rolled a ${d3.innerHTML}`
    console.log(JSON.stringify(d3.innerHTML))
    let index = heiarchy.indexOf(d3.innerHTML)
    console.log(index)
  } else if (d1.innerHTML == d3.innerHTML) {
    compStatus.innerHTML = `Banker rolled a ${d2.innerHTML}`
    console.log(JSON.stringify(d2.innerHTML))
    let index = heiarchy.indexOf(d2.innerHTML)
    console.log(index)
  } else if (d2.innerHTML == d3.innerHTML) {
    compStatus.innerHTML = `Banker rolled a ${d1.innerHTML}`
    console.log(JSON.stringify(d1.innerHTML))
    let index = heiarchy.indexOf(d1.innerHTML)
    console.log(index)
  } else if (JSON.stringify(compDice) === JSON.stringify(['1', '2', '3'])) {
    compStatus.innerHTML = `1-2-3 Banker Loses`
  } else if (JSON.stringify(compDice) === JSON.stringify(['4', '5', '6'])) {
    compStatus.innerHTML = `HEADCRACK BANKER WINS`
  } else {
    compStatus.innerHTML = `Banker Rolls Again`
    computerRoll()
  }
}

const playerRoll = () => {
  d4.innerHTML = Math.floor(Math.random() * 6 + 1)
  d5.innerHTML = Math.floor(Math.random() * 6 + 1)
  d6.innerHTML = Math.floor(Math.random() * 6 + 1)
  playerDice = []
  playerDice.push(d4.innerHTML, d5.innerHTML, d6.innerHTML)
  playerDice = playerDice.sort()
  playerScore()
}

const playerScore = () => {
  console.log(playerDice)
  if (d4.innerHTML == d5.innerHTML && d5.innerHTML == d6.innerHTML) {
    playerStatus.innerHTML = `You rolled triple ${d4.innerHTML}'s`
  } else if (d4.innerHTML == d5.innerHTML) {
    playerStatus.innerHTML = `You rolled a ${d6.innerHTML}`
    let www = heiarchy.indexOf(d6.innerHTML)
    console.log(www)
  } else if (d4.innerHTML == d6.innerHTML) {
    playerStatus.innerHTML = `You rolled a ${d5.innerHTML}`
    console.log(JSON.stringify(d5.innerHTML))
    let www = heiarchy.indexOf(d5.innerHTML)
    console.log(www)
  } else if (d5.innerHTML == d6.innerHTML) {
    playerStatus.innerHTML = `You rolled a ${d4.innerHTML}`
    console.log(JSON.stringify(d4.innerHTML))
    let www = heiarchy.indexOf(d4.innerHTML)
    console.log(www)
  } else if (JSON.stringify(playerDice) === JSON.stringify(['1', '2', '3'])) {
    playerStatus.innerHTML = `1-2-3 You Lose`
  } else if (JSON.stringify(playerDice) === JSON.stringify(['4', '5', '6'])) {
    playerStatus.innerHTML = `HEADCRACK YOU WIN`
  } else {
    playerStatus.innerHTML = `Roll Again`
  }
}

const checkForWinner = () => {
  if (JSON.stringify(compDice) === JSON.stringify[('4', '5', '6')]) {
    console.log('computer wins')
  }
}

playBtn.addEventListener('click', computerRoll)
// playBtn.style.visibility = 'none'

rollDiceBtn.addEventListener('click', playerRoll)
