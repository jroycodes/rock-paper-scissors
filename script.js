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
    if (!["rock", "paper", "scisssors"].includes(userChoice)) {
      alert("Inavalid choice. Please choose rock, paper or scissors.");
      return getUserChoice();
    }
  
    // return userChoice
    return userChoice;
  }
  
  // Play round
  function playround(playerSelection, computerSelection) {
    //Deternmine winner
    if (
      (playerSelection === "rock" && computerSelection === "scissors") ||
      (playerSelection === "scissors" && computerSelection === "paper") ||
      (playerSelection === "paper" && computerSelection === "rock")
    ) {
      alert(`You win!! ${playerSelection} beats ${computerSelection}`);
    } else if (playerSelection === computerSelection) {
      alert(`It's a tie! Both chose ${playerSelection}.`);
    } else {
      alert(`You Lose!! ${computerSelection} beats ${playerSelection}`);
    }
  }