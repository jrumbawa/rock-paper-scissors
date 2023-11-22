const rockBtn = document.getElementById("rock-btn")
const paperBtn = document.getElementById("paper-btn")
const scissorsBtn = document.getElementById("scissors-btn")
const gameMessage = document.getElementById("game-message")
const buttonWrapper = document.getElementById("button-wrapper")
const playerScoreEl = document.getElementById("player-score")
const computerScoreEl = document.getElementById("computer-score")

let playerScore = 0
let computerScore = 0

rockBtn.addEventListener("click", function() {
  gameMessage.textContent = playRound("rock", getComputerChoice())
  renderGame()
})

paperBtn.addEventListener("click", function() {
  gameMessage.textContent = playRound("paper", getComputerChoice())
  renderGame()
})

scissorsBtn.addEventListener("click", function() {
  gameMessage.textContent = playRound("scissors", getComputerChoice())
  renderGame()
})

function getComputerChoice() {
  const choices = ['rock', 'paper', 'scissors']
  const rand = Math.floor(Math.random() * choices.length)
  return choices[rand]
}

function playRound(playerChoice, computerChoice) {
  if (playerChoice === 'rock' && computerChoice === 'scissors') {
    playerScore++
    return 'You win! Rock beats scissors'
  } else if (playerChoice === 'rock' && computerChoice === 'paper') {
    computerScore++
    return 'You lose! Paper beats rock!'
  } else if (playerChoice === 'paper' && computerChoice === 'rock') {
    playerScore++
    return 'You win! Paper beats rock'
  } else if (playerChoice === 'paper' && computerChoice === 'scissors') {
    computerScore++
    return 'You lose! Scissors beats paper!'
  } else if (playerChoice === 'scissors' && computerChoice === 'paper') {
    playerScore++
    return 'You win! Scissors beats paper!'
  } else if (playerChoice === 'scissors' && computerChoice === 'rock') {
    computerScore++
    return 'You lose! Rock beats paper'
  } else {
    return "It's a draw!"
  }
}

function renderGame() {
  playerScoreEl.textContent = playerScore
  computerScoreEl.textContent = computerScore
  if (playerScore === 5) {
    gameMessage.textContent = 'You win the game!'
    buttonWrapper.style.display = 'none'
  } else if (computerScore === 5){
    gameMessage.textContent = 'The computer wins the game!'
    buttonWrapper.style.display = 'none'
  }
}


