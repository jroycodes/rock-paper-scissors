"use strict";

// let computerChoice;

// // Get computer choice
// function getComputerChoice() {
//   // choices
//   const choices = ["rock", "paper", "scissors"];
//   // get random indexes
//   const randomIndex = Math.floor(Math.random() * choices.length);
//   console.log(choices);

//   // return choice corresponding to random index
//   computerChoice = choices[randomIndex];
//   return computerChoice;
// }
// // getComputerChoice();
// // console.log(computerChoice);

// let userChoice;
// // Get user input
// function getUserChoice() {
//   // prompt for user input
//   userChoice = prompt("Rock, Paper, Scissors?");

//   // validate user input
//   userChoice = userChoice.toLowerCase();
//   if (!["rock", "paper", "scissors"].includes(userChoice)) {
//     alert("Inavalid choice. Please choose rock, paper or scissors.");
//     return getUserChoice();
//   }

//   return userChoice;
// }
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
// let computerScore = 0;
// let playerScore = 0;

// function playGame() {
//   for (let i = 0; i < 5; i++) {
//     const playerSelection = getUserChoice();
//     const computerSelection = getComputerChoice();

//     if (
//       (playerSelection === "rock" && computerSelection === "scissors") ||
//       (playerSelection === "scissors" && computerSelection === "paper") ||
//       (playerSelection === "paper" && computerSelection === "rock")
//     ) {
//       playerScore++;
//       alert("Player won this round!!");
//     } else if (playerSelection === computerSelection) {
//       alert(`It's a tie! Both chose ${playerSelection}.`);
//     } else {
//       computerScore++;
//       alert("Computer wins this round!!");
//     }
//   }

//   if (playerScore > computerScore) {
//     alert("Congratulations!! You won the game 🏆", playerScore);
//   } else if (playerScore === computerScore) {
//     alert("Its a tie");
//   } else alert("Computer won the game", computerScore);
// } 

// // Function to reload the game
// function reloadGame() {
//   // Reload the page
//   window.location.reload();
// }

// // Event listener for the reload button
// document.getElementById("reloadButton").addEventListener("click", reloadGame);

// // Function calls
// playGame();

let computerChoice;

// Get computer choice
function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  const randomIndex = Math.floor(Math.random() * choices.length);
  computerChoice = choices[randomIndex];
}

// Get user input and play round
function playRound(userChoice) {
  getComputerChoice(); // Call this to get a new computer choice for each round

  // Compare userChoice with computerChoice
  if (
    (userChoice === "rock" && computerChoice === "scissors") ||
    (userChoice === "scissors" && computerChoice === "paper") ||
    (userChoice === "paper" && computerChoice === "rock")
  ) {
    alert(`You win!! 🏆${userChoice} beats ${computerChoice}`);
  } else if (userChoice === computerChoice) {
    alert(`It's a tie!. Both selected ${userChoice}`);
  } else {
    alert(`You Lose!! ${computerChoice} beats ${userChoice}`);
  }

  // Log the computer's choice and the user's choice for debugging
  console.log("Computer's choice:", computerChoice);
  console.log("User's choice:", userChoice);
}

// Add event listeners to user input elements
const inputRock = document.getElementById("rock");
inputRock.addEventListener("click", () => {
  playRound("rock"); // Call playRound with the user's choice
});

const inputPaper = document.getElementById("paper");
inputPaper.addEventListener("click", () => {
  playRound("paper"); // Call playRound with the user's choice
});

const inputScissors = document.getElementById("scissors");
inputScissors.addEventListener("click", () => {
  playRound("scissors"); // Call playRound with the user's choice
});
