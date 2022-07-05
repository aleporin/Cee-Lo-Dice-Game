const playBtn = document.querySelector('#btn')

const rollDiceBtn = document.querySelector('#rollDice')

let compStatus = document.querySelector('.compScore')

let dice = []

let d1 = document.querySelector('#d1')
let d2 = document.querySelector('#d2')
let d3 = document.querySelector('#d3')

let d4 = document.querySelector('#d4')
let d5 = document.querySelector('#d5')
let d6 = document.querySelector('#d6')

const computerRoll = () => {
  d1.innerHTML = Math.floor(Math.random() * 6 + 1)
  // d1 and add class name for respective dice background image d1.className = BG + d1.innerHTML
  d2.innerHTML = Math.floor(Math.random() * 6 + 1)
  d3.innerHTML = Math.floor(Math.random() * 6 + 1)
  dice = []
  dice.push(d1.innerHTML, d2.innerHTML, d3.innerHTML)
  dice = dice.sort()
  computerScore()
}

const computerScore = () => {
  console.log(dice)
  if (d1.innerHTML == d2.innerHTML && d2.innerHTML == d3.innerHTML) {
    compStatus.innerHTML = `Banker rolled triple ${d1.innerHTML}'s`
  } else if (d1.innerHTML == d2.innerHTML) {
    compStatus.innerHTML = `Banker rolled a ${d3.innerHTML}`
  } else if (d1.innerHTML == d3.innerHTML) {
    compStatus.innerHTML = `Banker rolled a ${d2.innerHTML}`
  } else if (d2.innerHTML == d3.innerHTML) {
    compStatus.innerHTML = `Banker rolled a ${d1.innerHTML}`
  } else if (JSON.stringify(dice) === JSON.stringify(['1', '2', '3'])) {
    console.log('automatic loss')
  } else if (JSON.stringify(dice) === JSON.stringify(['4', '5', '6'])) {
    console.log('headcrack')
  }
}

const playerRoll = () => {
  d4.innerHTML = Math.floor(Math.random() * 6 + 1)
  d5.innerHTML = Math.floor(Math.random() * 6 + 1)
  d6.innerHTML = Math.floor(Math.random() * 6 + 1)
}

playBtn.addEventListener('click', computerRoll)

rollDiceBtn.addEventListener('click', playerRoll)
