const choices = ["rock", "paper", "scissors"];
let winners = [];

function resetGame() {
  // Resets the game
}

function startGame() {
  // On button select, begin a game with player selection corresponding to button clicked
  let buttons = document.querySelectorAll("button");
  buttons.forEach((button) =>
    button.addEventListener("click", () => {
      if (button.id) {
        playRound(button.id);
      }
    })
  );
}

function playRound(playerSelection) {
  let wins = countWins();
  if (wins >= 5) {
    return;
  }

  const computerSelection = computerChoice();
  let winner = checkWinner(playerSelection, computerSelection);
  winners.push(winner);
  displayWins();
}

// Random computer choice of rock paper or scissors
function computerChoice() {
  return choices[Math.floor(Math.random() * choices.length)];
}

function checkWinner(choiceP, choiceC) {
  if (choiceP === choiceC) {
    return "Tie";
  } else if (
    (choiceP === "rock" && choiceC == "scissors") ||
    (choiceP === "paper" && choiceC == "rock") ||
    (choiceP === "scissors" && choiceC == "paper")
  ) {
    return "Player";
  } else {
    return "Computer";
  }
}

function countWins() {
  let playerWins = winners.filter((item) => item == "Player").length;
  let computerWins = winners.filter((item) => item == "Computer").length;
  return Math.max(playerWins, computerWins);
}

function logWins() {
  let playerWins = winners.filter((item) => item == "Player").length;
  let computerWins = winners.filter((item) => item == "Computer").length;
  let ties = winners.filter((item) => item == "Tie").length;
}

function displayWins() {
  
}