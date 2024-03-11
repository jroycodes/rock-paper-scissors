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
  