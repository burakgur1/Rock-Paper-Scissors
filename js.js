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

function getHumanChoice() {
  return prompt("Rock, paper or scissors?").toLowerCase();
}

let computerScore = 0;
let playerScore = 0;

function playRound(playerChoice, computerChoice) {
  console.log(`You chose: ${playerChoice}`);
  console.log(`Computer chose: ${computerChoice}`);

  if (playerChoice === computerChoice) {
    console.log("It's a tie!");
  } else if (
    (playerChoice === "rock" &&
      computerChoice === "scissors") ||
    (playerChoice === "paper" &&
      computerChoice === "rock") ||
    (playerChoice === "scissors" &&
      computerChoice === "paper")
  ) {
    playerScore++;

    console.log(
      `You win! ${playerChoice} beats ${computerChoice}.`
    );
  } else {
    computerScore++;

    console.log(
      `You lose! ${computerChoice} beats ${playerChoice}.`
    );
  }

  console.log(
    `Score: Player ${playerScore} - ${computerScore} Computer`
  );
}

playRound(getHumanChoice(), getComputerChoice());
playRound(getHumanChoice(), getComputerChoice());
playRound(getHumanChoice(), getComputerChoice());
playRound(getHumanChoice(), getComputerChoice());
playRound(getHumanChoice(), getComputerChoice());