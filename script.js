
let choices = ["Rock", "Paper", "Scissors"];

function getComputerChoice() {
    return choices[Math.floor(Math.random() * 10) % 3];
}


let hScore = 0;
let cScore = 0;

const humanScore = document.querySelector(".youScore");
const computerScore = document.querySelector(".compScore");

const buttons = document.querySelectorAll("button");

const dialog = document.querySelector(".dialog");
const result = document.querySelector(".result");
const catImg = document.querySelector(".cat");

const finalResult = document.querySelector(".opt");


function playRound(humanChoice, computerChoice) {

    

    if(humanChoice == computerChoice){
        console.log("Draw!!")
        dialog.innerText = "Draw!!";
        result.innerText = "";
        catImg.src = "./images/loseround.png";
    }
    else if((humanChoice=="Rock" && computerChoice=="Scissors") || (humanChoice=="Paper" && computerChoice=="Rock") || (humanChoice=="Scissors" && computerChoice=="Paper")){
        hScore++;
        humanScore.innerText = hScore;
        dialog.innerText = "You Win The Round!!";
        result.innerText = `${humanChoice} beats ${computerChoice}`;
        catImg.src = "./images/winround.png"
    }
    else{
        cScore++;
        computerScore.innerText = cScore;
        dialog.innerText = "You Lost The Round!!";
        result.innerText = `${computerChoice} beats ${humanChoice}`;
        catImg.src = "./images/loseround.png";
    }
}


// function playGame() {
//     for(let i=0;i<5;i++){
//         let humanChoice = getHumanChoice();
//         let computerChoice = getComputerChoice(); 

//         playRound(humanChoice, computerChoice);
//     }

//     if(humanScore > computerScore){
//         console.log("Human Wins");
//     }
//     else if(computerScore > humanScore){
//         console.log("Computer Wins");
//     }
//     else{
//         console.log("It's A Draw");
//     }
// }

// playGame()

function startGame(humanChoice){
    // console.log(humanChoice)

    const compChoice = getComputerChoice();
    playRound(humanChoice, compChoice);
    
    if(cScore >= 5){
        buttons.forEach((button) => {
            button.remove();
        })

        finalResult.style.cssText = "flex-direction: column;"
        catImg.src = "./images/lose.png";
        const finalRes = document.createElement("h1");
        finalRes.innerText = "YOU LOSE!!!";
        finalResult.appendChild(finalRes);

        const restart = document.createElement("button");
        restart.innerText = "Restart";
        finalResult.appendChild(restart);

        restart.addEventListener("click", ()=>{
            location.reload();
        })

        

    }

    if(hScore >= 5){
        buttons.forEach((button) => {
            button.remove();
        })

        finalResult.style.cssText = "flex-direction: column;"

        catImg.src = "./images/win.png";
        const finalRes = document.createElement("h1");
        finalRes.innerText = "YOU WIN!!!";
        finalResult.appendChild(finalRes);

        const restart = document.createElement("button");
        restart.innerText = "Restart";
        finalResult.appendChild(restart);

        restart.addEventListener("click", ()=>{
            location.reload();
        })

    }

}



buttons.forEach((button) => {
    button.addEventListener("click", (e)=> {
        startGame(e.target.innerText)
    })
})

