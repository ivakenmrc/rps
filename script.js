let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3);

    switch(randomNumber) {
        case 0:
            return "rock"
        case 1:
            return "paper"
        case 2:
            return "scissors"    
    }
}


function getHumanChoice() {
    const choice = prompt("rock, paper or scissors?")
    return choice;
}

function playRound(humanChoice, computerChoice) {
    let winner = ""
    let roundInfo = ""
    const humanChoiceLowered = humanChoice.toLowerCase();
    const computerChoiceLowered = computerChoice.toLowerCase();
    if(humanChoiceLowered === "rock") {
        if(computerChoiceLowered === "paper") {
            winner = "Computer";
            computerScore++;
        } else if (computerChoiceLowered === "scissors") {
            winner = "Human";
            humanScore++;
        }
    } else if(humanChoiceLowered === "paper") {
        if(computerChoiceLowered === "rock") {
            winner = "Human";
            humanScore++;
        } else if(computerChoiceLowered === "scissors") {
            winner = "Computer";
            computerScore++;
        }
    } else if(humanChoiceLowered === "scissors") {
        if(computerChoiceLowered === "rock") {
            winner = "Computer";
            computerScore++
        } else if (computerChoiceLowered === "paper") {
            winner = "Human";
            humanScore++;
        }
    } else {
        winner = null;
    }

    console.log("--------------")
    if(winner) {
        console.log(`${winner} wins!`)
    } else {
        console.log("Draw")
    }

    console.log(`Human: ${humanChoiceLowered} vs Computer: ${computerChoiceLowered}`)
    console.log(`Human: ${humanScore}`)
    console.log(`Computer: ${computerScore}`)
    console.log("--------------")
 }

 
 function playGame() {
    for (let i = 0; i < 5; i++) {
        playRound(getHumanChoice(), getComputerChoice());
    }
    
 }


 playGame();