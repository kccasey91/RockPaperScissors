function startGame(){

let humanScore = 0;
let cpuScore = 0;
let roundCounter = 0;
const maxRounds = 5;


const buttons = document.querySelectorAll('button');
buttons.forEach(button => {
    button.addEventListener('click', () => {
      if(roundCounter < maxRounds) {
        const cpuChoice = getCpuChoice();
        playRound(button.id, cpuChoice);

        if (roundCounter === maxRounds) {
          displayResults();
          disableButtons(buttons);
  
    }
    });
});

function playRound(humanChoice, computerChoice){
  const displayPlayerScore = document.querySelector('.player-score');
  const displayCpuScore = document.querySelector('.cpu-score');
  const displayText = document.querySelector('.display-text');

  if((computerChoice === 'rock' && humanChoice === 'scissors') ||
     (computerChoice === 'paper' && humanChoice === 'rock') ||
     (computerChoice === 'scissors' && humanChoice === 'paper')) {
      cpuScore++;
      displayCpuScore.textContent = `${cpuScore}`;
      displayText.textContent = `You lose! ${computerChoice} beats ${humanChoice}`;
      return cpuScore;
     } else if ((humanChoice === 'rock' && computerChoice === 'scissors') ||
                (humanChoice === 'paper' && computerChoice === 'rock') ||
                (humanChoice === 'scissors' && computerChoice === 'paper')) {
                  humanScore++;
                  displayPlayerScore.textContent = `${humanScore}`;
                  displayText.textContent = `You win! ${humanChoice} beats ${computerChoice}`;
                  return humanScore;
                } else if (computerChoice === humanChoice) {
                  displayText.textContent = 'Tie Game!';
                }
}

function displayResults(){
  
}


function getCpuChoice(){
  let randomNum = Math.random();
  
  if(randomNum < .333) {
      return 'rock';
  } else if(randomNum > .332 && randomNum < .666) {
      return 'paper';
  } else return 'scissors';
}
}

const start = document.querySelector('.start-button');

start.addEventListener('click', () => {
  startGame();
  start.disabled = true;
})
