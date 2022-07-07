const playBtn = document.querySelector('.playBtn')

const rollDiceBtn = document.querySelector('#rollDice')

const playAgainBtn = document.querySelector('#reset')

let compStatus = document.querySelector('.compScore')

let playerStatus = document.querySelector('.playerScore')

let resultMsg = document.querySelector('.resultMessage')

let compDice = []
let playerDice = []

const allDivs = document.querySelectorAll('.die')

const compDivs = document.querySelectorAll('.compDivs')
let d1 = document.querySelector('#d1')
let d2 = document.querySelector('#d2')
let d3 = document.querySelector('#d3')

const playerDivs = document.querySelectorAll('.playerDivs')
let d4 = document.querySelector('#d4')
let d5 = document.querySelector('#d5')
let d6 = document.querySelector('#d6')

let playerIndex

let compIndex

const heiarchy = [
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

const rollClasses = ['roll1', 'roll2', 'roll3', 'roll4', 'roll5', 'roll6']

rollDiceBtn.style.display = 'none'
playAgainBtn.style.display = 'none'

const computerRoll = () => {
  compDivs.forEach((div) => {
    div.classList.remove(...rollClasses)
    div.innerHTML = Math.floor(Math.random() * 6 + 1)
    div.classList.add(`roll${div.innerHTML}`)
  })
  playBtn.style.display = 'none'
  compDice = []
  compDice.push(d1.innerHTML, d2.innerHTML, d3.innerHTML)
  compDice = compDice.sort()
  setTimeout(computerScore, 750)
}

const computerScore = () => {
  console.log(compDice)
  if (d1.innerHTML == d2.innerHTML && d2.innerHTML == d3.innerHTML) {
    compIndex = heiarchy.indexOf(
      `${d1.innerHTML}-${d2.innerHTML}-${d3.innerHTML}`
    )
    console.log(compIndex)
    compStatus.innerHTML = `Banker rolled triple ${d1.innerHTML}'s`
    rollDiceBtn.style.display = 'inline'
  } else if (d1.innerHTML == d2.innerHTML) {
    compStatus.innerHTML = `Banker rolled a ${d3.innerHTML}`
    // console.log(JSON.stringify(d3.innerHTML))
    rollDiceBtn.style.display = 'inline'
    compIndex = heiarchy.indexOf(d3.innerHTML)
    // console.log(compIndex)
  } else if (d1.innerHTML == d3.innerHTML) {
    compStatus.innerHTML = `Banker rolled a ${d2.innerHTML}`
    // console.log(JSON.stringify(d2.innerHTML))
    rollDiceBtn.style.display = 'inline'
    compIndex = heiarchy.indexOf(d2.innerHTML)
    // console.log(compIndex)
  } else if (d2.innerHTML == d3.innerHTML) {
    compStatus.innerHTML = `Banker rolled a ${d1.innerHTML}`
    // console.log(JSON.stringify(d1.innerHTML))
    rollDiceBtn.style.display = 'inline'
    compIndex = heiarchy.indexOf(d1.innerHTML)
    // console.log(compIndex)
  } else if (JSON.stringify(compDice) === JSON.stringify(['1', '2', '3'])) {
    compStatus.innerHTML = `1-2-3 Banker Loses`
    rollDiceBtn.style.display = 'inline'
  } else if (JSON.stringify(compDice) === JSON.stringify(['4', '5', '6'])) {
    compStatus.innerHTML = `HEADCRACK BANKER WINS`
    rollDiceBtn.style.display = 'inline'
  } else {
    compStatus.innerHTML = `Banker Rolls Again`
    computerRoll()
  }
  checkComputer()
}

const playerRoll = () => {
  playerDivs.forEach((div) => {
    div.classList.remove(...rollClasses)
    div.innerHTML = Math.floor(Math.random() * 6 + 1)
    div.classList.add(`roll${div.innerHTML}`)
  })
  playerDice = []
  playerDice.push(d4.innerHTML, d5.innerHTML, d6.innerHTML)
  playerDice = playerDice.sort()
  playerScore()
}

const playerScore = () => {
  console.log(playerDice)
  if (d4.innerHTML == d5.innerHTML && d5.innerHTML == d6.innerHTML) {
    playerIndex = heiarchy.indexOf(
      `${d4.innerHTML}-${d5.innerHTML}-${d6.innerHTML}`
    )
    console.log(playerIndex)
    checkForWinner()
    playerStatus.innerHTML = `You rolled triple ${d4.innerHTML}'s`
    rollDiceBtn.style.display = 'none'
    checkForWinner()
  } else if (d4.innerHTML == d5.innerHTML) {
    // playerStatus.innerHTML = `You rolled a ${d6.innerHTML}`
    rollDiceBtn.style.display = 'none'
    playerIndex = heiarchy.indexOf(d6.innerHTML)
    checkForWinner()
    // console.log(playerIndex)
  } else if (d4.innerHTML == d6.innerHTML) {
    // playerStatus.innerHTML = `You rolled a ${d5.innerHTML}`
    // console.log(JSON.stringify(d5.innerHTML))
    playerIndex = heiarchy.indexOf(d5.innerHTML)
    rollDiceBtn.style.display = 'none'
    checkForWinner()
    // console.log(playerIndex)
  } else if (d5.innerHTML == d6.innerHTML) {
    // playerStatus.innerHTML = `You rolled a ${d4.innerHTML}`
    rollDiceBtn.style.display = 'none'
    playerIndex = heiarchy.indexOf(d4.innerHTML)
    checkForWinner()
  } else if (JSON.stringify(playerDice) === JSON.stringify(['1', '2', '3'])) {
    // playerStatus.innerHTML = `1-2-3 You Lose`
    rollDiceBtn.style.display = 'none'
    checkForWinner()
  } else if (JSON.stringify(playerDice) === JSON.stringify(['4', '5', '6'])) {
    rollDiceBtn.style.display = 'none'
    checkForWinner()
  } else {
    // (d1.innerHTML !== d2.innerHTML && d2.innerHTML !== d3.innerHTML)
    // rollDiceBtn.style.display = 'none'
    // playerStatus.innerHTML = `Roll Again`
  }
  checkPlayer()
}

const checkComputer = () => {
  if (JSON.stringify(compDice) === JSON.stringify(['1', '2', '3'])) {
    resultMsg.innerHTML = `Congrats a free win!`
    rollDiceBtn.style.display = 'none'
    playAgainBtn.style.display = 'block'
  } else if (JSON.stringify(compDice) === JSON.stringify(['4', '5', '6'])) {
    resultMsg.innerHTML = `Yikes you dont even get to roll!`
    rollDiceBtn.style.display = 'none'
    playAgainBtn.style.display = 'block'
  }
}

const checkPlayer = () => {
  if (JSON.stringify(playerDice) === JSON.stringify(['1', '2', '3'])) {
    resultMsg.innerHTML = `1-2-3 yuck. You lose!`
    playAgainBtn.style.display = 'inline-block'
  } else if (JSON.stringify(playerDice) === JSON.stringify(['4', '5', '6'])) {
    resultMsg.innerHTML = `HEADCRACK YOU WIN!!`
    playAgainBtn.style.display = 'inline-block'
  }
}

const checkForWinner = () => {
  console.log(playerIndex, compIndex)
  if (playerIndex > compIndex) {
    resultMsg.innerHTML = `Congrats you won!`
    playAgainBtn.style.display = 'inline-block'
  } else if (playerIndex < compIndex) {
    resultMsg.innerHTML = `Yikes! Better luck next time!`
    playAgainBtn.style.display = 'inline-block'
  } else if (playerIndex === compIndex) {
    resultMsg.innerHTML = `You also rolled a ${playerIndex}...Nobody likes ties ... Play again`
    playAgainBtn.style.display = 'inline-block'
  }
}

let resetGame = () => {
  playerStatus.innerHTML = ''
  compStatus.innerHTML = ''
  resultMsg.innerHTML = ''
  playerIndex = ''
  compIndex = ''
  allDivs.forEach((div, index) => {
    div.innerHTML = index + 1
    div.classList.remove(...rollClasses)
    div.classList.add(`roll${div.innerHTML}`)
  })
  rollDiceBtn.style.display = 'none'
  playBtn.style.display = 'block'
  playAgainBtn.style.display = 'none'
  // how to reset game so that its like the screen was refreshed. Functionality isnt working after a reset
}
resetGame()

playAgainBtn.addEventListener('click', resetGame)

playBtn.addEventListener('click', computerRoll)

rollDiceBtn.addEventListener('click', playerRoll)
