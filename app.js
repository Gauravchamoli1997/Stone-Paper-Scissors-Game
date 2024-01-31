let userScore = 0;
let computerScore = 0;

const choices = document.querySelectorAll(".choice");
const userScores = document.querySelector("#user-score");
const compScores = document.querySelector("#computer-score");
const msg = document.querySelector("#msg");
const resetGame = document.querySelector(".reset-btn");

const showWinner = (userWin, userChoice, compChoice) => {
  if (userWin) {
    userScore++;
    userScores.innerHTML = userScore;
    msg.innerHTML = `You Win! Your ${userChoice} beats ${compChoice}`;
    msg.style.backgroundColor = "green";
  } else {
    computerScore++;
    compScores.innerHTML = computerScore;
    msg.innerHTML = `You Lost!  ${compChoice} beats your ${userChoice}`;
    msg.style.backgroundColor = "red";
  }
};

const drawGame = () => {
  msg.innerHTML = "Game was Draw. Play again.";
  msg.style.backgroundColor = "#081b31";
};

const genCompChoice = () => {
  const options = ["rock", "paper", "scissors"];
  const randIdx = Math.floor(Math.random() * 3);

  return options[randIdx];
};

const playGame = (userChoice) => {
  const compChoice = genCompChoice();

  if (userChoice === compChoice) {
    drawGame();
  } else {
    let userWin = true;

    if (userChoice === "rock") {
      if (compChoice === "paper") {
        userWin = false;
      } else {
        userWin = true;
      }
    } else if (userChoice === "paper") {
      if (compChoice === "scissors") {
        userWin = false;
      } else {
        userWin = true;
      }
    } else {
      if (compChoice === "rock") {
        userWin = false;
      } else {
        userWin = true;
      }
    }

    showWinner(userWin, userChoice, compChoice);
  }
};

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    playGame(userChoice);
  });
});

resetGame.addEventListener("click", () => {
  userScores.innerHTML = "0";
  compScores.innerHTML = "0";
  msg.innerHTML = "Play your move";
  msg.style.backgroundColor = "#081b31";
});
