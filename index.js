function getComputerChoice(){
    let randomNum = Math.random();
    
    if(randomNum < .333) {
        return 'rock';
    } else if(randomNum > .332 && randomNum < .666) {
        return 'paper';
    } else return 'scissors';
}

function getHumanChoice(){
    let user = prompt('Rock, Paper or Scissors?');
    return user.toLowerCase();
}

function playGame(){
    let humanScore = 0;
    let computerScore = 0;
    function playRound(humanChoice, computerChoice){
        if((computerChoice === 'rock' && humanChoice === 'scissors') ||
           (computerChoice === 'paper' && humanChoice === 'rock') ||
           (computerChoice === 'scissors' && humanChoice === 'paper')) {
            computerScore++;
            console.log(`You lose! ${computerChoice} beats ${humanChoice}`)
           } else if ((humanChoice === 'rock' && computerChoice === 'scissors') ||
                      (humanChoice === 'paper' && computerChoice === 'rock') ||
                      (humanChoice === 'scissors' && computerChoice === 'paper')) {
                        humanScore++;
                        console.log(`You win! ${humanChoice} beats ${computerChoice}`)
                      } else if (computerChoice === humanChoice) {
                        console.log('Tie Game!');
                      }
    }

    for(let i = 0; i < 5; i++) {
        const humanChoice = getHumanChoice();
        const computerChoice = getComputerChoice();

        playRound(humanChoice, computerChoice);
    }
}

playGame();

