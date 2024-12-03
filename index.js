let humanScore = 0;
let computerScore = 0;

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
    return user;
}

getHumanChoice();

function playRound(humanChoice, computerChoice){
    
}
