console.log("Hello World");

function getComputerChoice() {
    let randomNumber = Math.random();
    if (randomNumber < 0.34) {
        return "rock";
    } else if (randomNumber < 0.67) {
        return "paper";
    } else {
        return "scissors";
    }
}

function getHumanChoice() {
    let humanChoice = prompt("Enter your choice: rock, paper or scissors?");
    return humanChoice.toLowerCase();
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        return "It's a tie!";
    } else if (humanChoice === "rock") {
        if (computerChoice === "scissors") {
            humanScore++;
            return "You win! Rock beats scissors";
        } else {
            computerScore++;
            return "You lose! Paper beats rock. Try again!";
        }
    } else if (humanChoice === "paper") {
        if (computerChoice === "rock") {
            humanScore++;
            return "You win! Paper beats rock";
        } else {
            computerScore++;
            return "You lose! Scissors beat paper. Try again!";
        }
    } else if (humanChoice === "scissors") {
        if (computerChoice === "paper") {
            humanScore++;
            return "You win! Scissors beat paper";
        } else {
            computerScore++;
            return "You lose! Rock beats scissors. Try again!";
        }
    } else {
        return "Invalid choice. Please enter rock, paper, or scissors.";
    }
}

let humanChoice = getHumanChoice();
let computerChoice = getComputerChoice();
let result = playRound(humanChoice, computerChoice);
alert(result); 
console.log(result);

