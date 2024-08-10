let Other;
let userScore = 0;
let compScore = 0;
const options = ["rock", "paper", "scissor"];
const choices = document.querySelectorAll(".choice");
const user = document.querySelector("#user-score");
const comp = document.querySelector("#comp-score");
const msg = document.querySelector("#msg");
const resetColor = (winner, loser) => {
  choices.forEach((choice) => {
    if (choice.id === winner) {
      choice.style.backgroundColor = "rgb(170, 255, 0)";
    } else if (choice.id === loser) {
      choice.style.backgroundColor = "rgb(255, 49, 49,0.75)";
    } else {
      choice.style.backgroundColor = "transparent";
    }
  });
};
const compChoiceGenerator = () => {
  const choice = Math.floor(Math.random() * 3);
  const compChoice = options[choice];
  return compChoice;
};
const findWinner = (userChoice, compChoice) => {
  if (userChoice === compChoice) {
    msg.innerText = "DRAW!!!!";
    resetColor(null, null);
    return;
  } else if (
    (userChoice === "paper" && compChoice === "rock") ||
    (userChoice === "scissor" && compChoice === "paper") ||
    (userChoice === "rock" && compChoice === "scissor")
  ) {
    ++userScore;
    user.innerText = userScore;
    msg.innerText = "You have won!!";
    resetColor(userChoice, compChoice);
    return;
  } else {
    ++compScore;
    comp.innerText = compScore;
    msg.innerText = "Sorry !!! You Lost";
    resetColor(compChoice, userChoice);
    return;
  }
};
choices.forEach((choice) => {
  const choiceID = choice.getAttribute("id");
  choice.addEventListener("click", () => {
    choice.style.backgroundColor = "white";
    findWinner(choiceID, compChoiceGenerator());
    user.innerText = userScore;
    comp.innerText = compScore;
  });
});
