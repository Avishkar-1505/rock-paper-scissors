console.log("Game Start");

let choices = ["rock", "paper", "scissor"];

function getComputerChoice() {
    return choices[Math.floor(Math.random() * 10) % 3];
}

function getHumanChoice() {
    let choice = prompt(`Enter a choice
Rock
Paper
Scissor`);

    

    return choice.toLowerCase();
}

let humanScore = 0;
let computerScore = 0;



function playRound(humanChoice, computerChoice) {

    if(humanChoice == computerChoice){
        console.log("Draw!!")
    }
    else if((humanChoice=="rock" && computerChoice=="scissor") || (humanChoice=="paper" && computerChoice=="rock") || (humanChoice=="scissor" && computerChoice=="paper")){
        humanScore++;
        console.log(`You win!! ${humanChoice} beats ${computerChoice}`);
    }
    else{
        computerScore++;
        console.log(`You Lose!! ${computerChoice} beats ${humanChoice}`);
    }
}


function playGame() {
    for(let i=0;i<5;i++){
        let humanChoice = getHumanChoice();
        let computerChoice = getComputerChoice();

        playRound(humanChoice, computerChoice);
    }

    if(humanScore > computerScore){
        console.log("Human Wins");
    }
    else if(computerScore > humanScore){
        console.log("Computer Wins");
    }
    else{
        console.log("It's A Draw");
    }
}

playGame()
// console.log(getHumanChoice())