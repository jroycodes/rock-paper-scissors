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
