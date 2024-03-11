"use strict";

// Get comoputer choice
function getComputerChoice() {
  // choices
  const choices = ["rock", "paper", "scissors"];

  // get random indexes
  const randomIndex = Math.floor(Math.random() * choices.length);

  // return choice corresponding to random index
  return choices[randomIndex];
}

// Get user choice
function getUserChoice() {
  // prompt for user input
  let userChoice = prompt("Rock, Paper, Scissors?");

  // Validate user input
  userChoice = userChoice.toLowerCase();
  if (!["rock", "paper", "scissors"].includes(userChoice)) {
    alert("Inavalid choice. Please choose rock, paper or scissors.");
    return getUserChoice();
  }

  // return userChoice
  return userChoice;
}

//   // Play round
//   function playround(playerSelection, computerSelection) {
//     //Deternmine winner
//     if (
//       (playerSelection === "rock" && computerSelection === "scissors") ||
//       (playerSelection === "scissors" && computerSelection === "paper") ||
//       (playerSelection === "paper" && computerSelection === "rock")
//     ) {
//       alert(`You win!! ${playerSelection} beats ${computerSelection}`);
//     } else if (playerSelection === computerSelection) {
//       alert(`It's a tie! Both chose ${playerSelection}.`);
//     } else {
//       alert(`You Lose!! ${computerSelection} beats ${playerSelection}`);
//     }
//   }

//   playround(playerSelection, computerSelection);

// Play a 5 round game
function playGame() {
  let playerScore = 0;
  let computerScore = 0;

  for (let round = 0; round < 5; round++) {
    const playerSelection = getUserChoice();
    const computerSelection = getComputerChoice();

    console.log("Players Choice:", playerSelection);
    console.log("Computers Choice:", computerSelection);

    if (
      (playerSelection === "rock" && computerSelection === "scissors") ||
      (playerSelection === "scissors" && computerSelection === "paper") ||
      (playerSelection === "paper" && computerSelection === "rock")
    ) {
      playerScore++;
      alert(
        `You win this round! ${playerSelection} beats ${computerSelection}`
      );
    } else if (playerSelection === computerSelection) {
      alert("It's a tie for this round!");
    } else {
      computerScore++;
      alert(
        `Computer wins this round! ${computerSelection} beats ${playerSelection}`
      );
    }
  }
  console.log("Player's score:", playerScore);
  console.log("Computer's score:", computerScore);

  if (playerScore > computerScore) {
    alert(`Congratulations! You win the game! Player's score ${playerScore}`);
  } else if (playerScore < computerScore) {
    alert(`Computer wins the game! Computer's score ${computerScore}`);
  } else {
    alert("It's a tie game!");
  }
}

const computerSelection = getComputerChoice();
console.log("Computer's Choice:", computerSelection);

const playerSelection = getUserChoice();
console.log("Your Choice:", playerSelection);

// Function to reload the game
function reloadGame() {
  // Reload the page
  window.location.reload();
}

// Event listener for the reload button
document.getElementById("reloadButton").addEventListener("click", reloadGame);

// Function calls
playGame();
