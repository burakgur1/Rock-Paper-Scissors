function getComputerChoice() {
  const randomNumber = Math.floor(Math.random() * 3);

  if (randomNumber === 0) {
    return "rock";
  } else if (randomNumber === 1) {
    return "paper";
  } else {
    return "scissors";
  }
}

let computerScore = 0;
let playerScore = 0;



function playRound(playerChoice, computerChoice) {
  let roundResult = "";

  if (playerScore === 5 || computerScore === 5) {
    return;
  }

  if (playerChoice === computerChoice) {
    roundResult = "It's a tie!";
  } else if (
    (playerChoice === "rock" && computerChoice === "scissors") ||
    (playerChoice === "paper" && computerChoice === "rock") ||
    (playerChoice === "scissors" && computerChoice === "paper")
  ) {
    playerScore++;
    roundResult = `You win! ${playerChoice} beats ${computerChoice}.`;
  } else {
    computerScore++;
    roundResult = `You lose! ${computerChoice} beats ${playerChoice}.`;
  }

  let gameResult = "";

  if (playerScore === 5) {
    gameResult = "You won the game!";
  } else if (computerScore === 5) {
    gameResult = "Computer won the game!";
  }

const resultDiv = document.querySelector("#result");

resultDiv.textContent = `
You chose: ${playerChoice}
Computer chose: ${computerChoice}

${roundResult}

Score: Player ${playerScore} - ${computerScore} Computer

${gameResult}
  `;
}

const rockButton = document.querySelector("#rock");
const paperButton = document.querySelector("#paper");
const scissorsButton = document.querySelector("#scissors");

rockButton.addEventListener("click", () => {
  playRound("rock", getComputerChoice());
});

paperButton.addEventListener("click", () => {
  playRound("paper", getComputerChoice());
});

scissorsButton.addEventListener("click", () => {
  playRound("scissors", getComputerChoice());
});