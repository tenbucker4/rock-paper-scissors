// Get input from user and log in variable choice
let playerChoice = prompt("Do you choose rock, paper, or scissors?");
console.log(playerChoice);

// Get randomly generated choice of rock, paper or scissors from the computer
  let computerChoice;
  function computerPlay(choice) {
    computerChoice = Math.random();
    if (computerChoice < 0.34) {
        computerChoice = "rock"; 
    } else if (computerChoice <= 0.67) {
        computerChoice = "paper";
    } else {
        computerChoice = "scissors";
    }
  } 

  computerPlay();

  console.log(computerChoice);

  function playRound(playerChoice, computerChoice) {
      if (playerChoice === "rock" && computerChoice === "scissors") {
          alert("You win!");
      } else if (playerChoice === "rock" && computerChoice === "paper") {
          alert("You lose.");
      } else if (playerChoice === "paper" && computerChoice === "rock") {
          alert("You win!");
      } else if (playerChoice === "paper" && computerChoice === "scissors") {
          alert("You lose.");
      } else if (playerChoice === "scissors" && computerChoice === "paper") {
          alert("You win!");
      } else if (playerChoice === "scissors" &&  computerChoice === "rock") {
          alert("You lose.")
      } else {
          alert("It's a tie.");
      }
  }

  playRound(playerChoice, computerChoice);



// If player chooses rock,
    // If computer chooses scissors,
        // Player wins
    // Else if computer chooses paper,
        // Player loses
    // Else
        // It's a tie

// If player chooses paper,
    // If computer chooses scissors,
        // Player loses
    // Else if computer chooses rock,
        // Player wins
    // Else
        // It's a tie

// If player chooses scissors,
    // If computer chooses paper,
        // Player wins
    // Else if computer chooses rock,
        // Player loses
    // Else
        // It's a tie