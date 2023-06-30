const buttons = document.querySelectorAll(".weapon");
const playerScoreElement = document.getElementById("player-score");
const computerScoreElement = document.getElementById("computer-score");
const computerText = document.querySelector(".computer-text");
const playerText = document.querySelector(".player-text");
const winnerElement = document.getElementById("winner");
const resetButton = document.getElementById("reset");
let playerChoice = "";
let playerScore = 0;
let computerScore = 0;

function getPlayerChoice() {
  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      playerChoice = button.id;
      playRound(playerChoice, getComputerChoice());
    });
  });
}

function updateScore() {
  playerScoreElement.textContent = playerScore;
  computerScoreElement.textContent = computerScore;
}

function getComputerChoice() {
  const options = ["ROCK", "PAPER", "SCISSOR"];
  return options[Math.floor(Math.random() * options.length)];
}

function playRound(playerChoice, computerChoice) {
  playerText.textContent = "Player's choice: " + playerChoice;
  computerText.textContent = "Computer's choice: " + computerChoice;

  if (
    (playerChoice === "ROCK" && computerChoice === "PAPER") ||
    (playerChoice === "SCISSOR" && computerChoice === "ROCK") ||
    (playerChoice === "PAPER" && computerChoice === "SCISSOR")
  ) {
    computerScore++;
    winnerElement.textContent = "Computer Wins!";
  } else if (playerChoice === computerChoice) {
    winnerElement.textContent = "It's a Tie";
  } else {
    playerScore++;
    winnerElement.textContent = "Player Wins!";
  }

  updateScore();

  if (playerScore >= 5 || computerScore >= 5) {
    endGame();
  }
}

function endGame() {
  buttons.forEach((button) => {
    button.disabled = true;
  });

  if (playerScore > computerScore) {
    winnerElement.textContent = "Player wins the game!";
  } else {
    winnerElement.textContent = "Computer wins the game!";
  }
}

function resetGame() {
  playerChoice = "";
  playerScore = 0;
  computerScore = 0;
  playerScoreElement.textContent = playerScore;
  computerScoreElement.textContent = computerScore;
  playerText.textContent = "PLAYER";
  computerText.textContent = "COMPUTER";
  winnerElement.textContent = "Choose your weapon!";
  buttons.forEach((button) => {
    button.disabled = false;
  });
}

resetButton.addEventListener("click", resetGame);

getPlayerChoice();
resetGame();