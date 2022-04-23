function computerPlay() {
    let options = ["Rock", "Paper", "Scissors"];
    return options[getRandomInt(0, 2)];

}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min)
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toUpperCase();

    if (playerSelection == "ROCK") {
        if (computerSelection == "Paper") {
            return "You lose! Paper beats Rock";
        } else if (computerSelection == "Scissors") {
            return "You win! Rock beats Scissors";
        } else { return "Tie!"; }
    } else if (playerSelection == "PAPER") {
        if (computerSelection == "Scissors") {
            return "You lose! Scissors beats Paper";
        } else if (computerSelection == "Rock") {
            return "You win! Paper beats Rock";
        } else { return "Tie!"; }
    } else if (playerSelection == "SCISSORS") {
        if (computerSelection == "Rock") {
            return "You lose! Rock beats Scissors";
        } else if (computerSelection == "Paper") {
            return "You win! Scissors beats Paper";
        } else { return "Tie!"; }
    } else { return "Invalid selection!"; }
}

function game() {
    let playerScore = 0;
    let computerScore = 0;

    for (let i = 0; i < 5; i++) {
        console.log("--ROUND " + (i + 1) + "--");
        let player = prompt("Rock, Paper, or Scissors?");
        let computer = computerPlay();
        let result = playRound(player, computer);
        console.log(result);
        result = result.slice(0, 8);

        if (result == "You lose") {
            computerScore++;
        } else if (result == "You win!") {
            playerScore++;
        } else if (result == "Invalid ") {
            i--;
        }

        console.log("SCORES:\nPlayer: " + playerScore +  " Computer: " + computerScore);
    }
    
    if (playerScore > computerScore) {
        console.log("Player Wins!");
    } else if (computerScore > playerScore) {
        console.log("Computer Wins!");
    } else { console.log("It's a Tie!"); }
}

game();