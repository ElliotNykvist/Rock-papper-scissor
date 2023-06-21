const options = ["ROCK","PAPER","SCISSOR"];
playerScore = 0;
computerScore = 0;

function getComputerChoice(options) {
  let choice1 = options[Math.floor(Math.random() * options.length)]
  return(choice1);
}

function getPlayerChoice() {
  let choice2 = prompt("Enter your Choice Rock, Paper or Scissors").toUpperCase();
  if (choice2 === "") {
    prompt("You did not enter Rock, Paper or Scissors, please try again!")
  } else {
    return(choice2);
  }
  
}


function playRound(playerChoice, computerChoice) {
  console.log(playerChoice + " Players choice!");
  console.log(computerChoice + " Computers choice!");

  if 
  ((playerChoice === "ROCK" && computerChoice === "PAPER")||
  (playerChoice === "SCISSOR" && computerChoice === "ROCK")||
  (playerChoice === "PAPER" && computerChoice === "SCISSOR")) {
    return("computer");
  } else if (playerChoice === computerChoice) {
    return("tie")
  } else {
    return("player")
  }
};

function game(){
  while (playerScore < 5 && computerScore < 5) {
  let playerChoice = getPlayerChoice()
  let computerChoice = getComputerChoice(options);
  let winner = playRound(playerChoice, computerChoice);

  if (winner === "computer") {
    console.log("Computer Wins!")
    computerScore++
  } else if (winner === "player") {
    console.log("Player Wins")
    playerScore++
  } else {
    console.log("It is a Tie")
  }

  

  console.log("Player Score: " + playerScore);
  console.log("Computer Score: " + computerScore);
  console.log("-----------------------");

} if (playerScore >= 5) {
  console.log("Player wins the game!");
} else {
  console.log("Computer wins the game!");
}

}

game();