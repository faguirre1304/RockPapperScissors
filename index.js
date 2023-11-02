//variables

let scoreFinal = 0,
  computerScore = 0,
  userPoints = 0;

let whoWin = document.querySelector("#whoWin");
let userScore = document.querySelector("#userScore");

//function take the value of the user option

let btns = document.querySelectorAll("#Btn");
btns.forEach((btn) => {
  btn.addEventListener("click", () => {
    let target = btn.value;

    userTarget(target);
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
let computerSelection = computerRandomChoice();

// estancado aca con la funcion que retorna el boton del usuario

function userTarget(userChoice) {
  let userSelection = userChoice;
  return userSelection;
}

let userSelectionNew = userTarget();
console.log(userSelectionNew);

function playingRound(userSelection, computerSelection) {
  console.log(computerSelection);
  if (userSelection === "rock" && computerSelection === "scissors") {
    whoWin.textContent = "User Win";
    userPoints++;
    userScore.textContent = userPoints;
  }
}

//start the game
