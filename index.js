const playerSelection = 'rock'

function getComputerChoice() {
  const choices = ['rock', 'paper', 'scissors']
  const rand = Math.floor(Math.random() * choices.length)
  return choices[rand]
}

const computerSelection = getComputerChoice()

function playRound(playerChoice, computerChoice) {
  if (playerChoice === 'rock' && computerChoice === 'scissors') {
    return 'You win! Rock beats scissors'
  } else if (playerChoice === 'rock' && computerChoice === 'paper') {
    return 'You lose! Paper beats rock!'
  } else if (playerChoice === 'paper' && computerChoice === 'rock') {
    return 'You win! Paper beats rock'
  } else if (playerChoice === 'paper' && computerChoice === 'scissors') {
    return 'You lose! Scissors beats paper!'
  } else if (playerChoice === 'scissors' && computerChoice === 'paper') {
    return 'You win! Scissors beats paper!'
  } else if (playerChoice === 'scissors' && computerChoice === 'rock') {
    return 'You lose! Rock beats paper'
  } else {
    return "It's a draw!"
  }
}

console.log(playRound(playerSelection, computerSelection))

Gamepad()