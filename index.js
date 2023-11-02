//variables

let scoreFinal = 0,
  computerScore = 0,
  target = "",
  userPoint = 0;

//function take the value of the user option

let btns = document.querySelectorAll("#Btn");
btns.forEach((btn) => {
  btn.addEventListener("click", () => {
    let target = btn.value;
    return console.log(target);
  });
});

// array for the computer option

//create a function to computer random choice for the computer

function computerRandomChoice() {
  let computerOptions = ["rock", "paper", "scissors"];
  let randomChoice = Math.floor(Math.random() * computerOptions.length);
  let computerChoice = computerOptions[randomChoice];

  return computerChoice;
}

let computerOption = computerRandomChoice();

let userOption = userChoice();

//start the game

function game() {
  if (userOption === "rock" && computerOption === "paper") {
    console.log("User Point");
  }
}

console.log(game());
