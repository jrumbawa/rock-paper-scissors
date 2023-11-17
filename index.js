const playerSelection = 'rock'

function getComputerChoice() {
  const choices = ['rock', 'paper', 'scissors']
  const rand = Math.floor(Math.random() * choices.length)
  return choices[rand]
}

const computerSelection = getComputerChoice()

function playRound(playerChoice, computerChoice) {
  if (playerChoice === 'rock' && computerChoice === 'scissors') {
    console.log('You win! Rock beats scissors')
  } else if (playerChoice === 'rock' && computerChoice === 'paper') {
    console.log('You lose! Paper beats rock!')
  } else if (playerChoice === 'paper' && computerChoice === 'rock') {
    console.log('You win! Paper beats rock') 
  } else if (playerChoice === 'paper' && computerChoice === 'scissors') {
    console.log('You lose! Scissors beats paper!')
  } else if (playerChoice === 'scissors' && computerChoice === 'paper') {
    console.log('You win! Scissors beats paper!')
  } else if (playerChoice === 'scissors' && computerChoice === 'rock') {
    console.log('You lose! Rock beats paper')
  } else {
    console.log("It's a draw!")
  }
}

playRound(playerSelection, computerSelection)