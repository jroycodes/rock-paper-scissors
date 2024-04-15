"use strict";

let computerChoice;

// Get computer choice
function getComputerChoice() {
  // choices
  const choices = ["rock", "paper", "scissors"];
  // get random indexes
  const randomIndex = Math.floor(Math.random() * choices.length);
  console.log(choices);

  // return choice corresponding to random index
  computerChoice = choices[randomIndex];
  return computerChoice;
}
// getComputerChoice();
// console.log(computerChoice);

let userChoice;
// Get user input
function getUserChoice() {
  // prompt for user input
  userChoice = prompt("Rock, Paper, Scissors?");

  // validate user input
  userChoice = userChoice.toLowerCase();
  if (!["rock", "paper", "scissors"].includes(userChoice)) {
    alert("Inavalid choice. Please choose rock, paper or scissors.");
    return getUserChoice();
  }

  return userChoice;
}
// getUserChoice();
// console.log(userChoice);

// play single round
// const playerSelection = userChoice;
// const computerSelection = computerChoice;

// // play round
// function playRound(playerSelection, computerSelection) {
//   if (
//     (playerSelection === "rock" && computerSelection === "scissors") ||
//     (playerSelection === "scissors" && computerSelection === "paper") ||
//     (playerSelection === "paper" && computerSelection === "rock")
//   ) {
//     alert(`You win!! ${playerSelection} beats ${computerSelection}`);
//   } else if (playerSelection === computerSelection) {
//     alert(`It's a tie! Both chose ${playerSelection}.`);
//   } else {
//     alert(`You Lose!! ${computerSelection} beats ${playerSelection}`);
//   }
// }

// playRound(playerSelection, computerSelection);

// Play a 5 round game
let computerScore = 0;
let playerScore = 0;

function playGame() {
  for (let i = 0; i < 5; i++) {
    const playerSelection = getUserChoice();
    const computerSelection = getComputerChoice();

    if (
      (playerSelection === "rock" && computerSelection === "scissors") ||
      (playerSelection === "scissors" && computerSelection === "paper") ||
      (playerSelection === "paper" && computerSelection === "rock")
    ) {
      playerScore++;
      alert("Player won this round!!");
    } else if (playerSelection === computerSelection) {
      alert(`It's a tie! Both chose ${playerSelection}.`);
    } else {
      computerScore++;
      alert("Computer wins this round!!");
    }
  }

  if (playerScore > computerScore) {
    alert("Congratulations!! You won the game 🏆", playerScore);
  } else if (playerScore === computerScore) {
    alert("Its a tie");
  } else alert("Computer won the game", computerScore);
} playGame();

// Function to reload the game
function reloadGame() {
  // Reload the page
  window.location.reload();
}

// // Event listener for the reload button
// document.getElementById("reloadButton").addEventListener("click", reloadGame);

// // Function calls
// playGame();
