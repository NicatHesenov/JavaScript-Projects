let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);

  if (!guess) {
    displayMessage("No Number");
  } else if (guess === secretNumber) {
    document.querySelector(".number").textContent = secretNumber;
    displayMessage("Correct Number");
    document.querySelector("body").style.backgroundColor = "#60b347";
    if (score > highScore) {
      highScore = score;

      document.querySelector(".highscore").textContent = highScore;
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? "Too High" : "Too Low");
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      displayMessage("You Lost Game");
      document.querySelector(".score").textContent = 0;
    }
  }
});
document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  highScore = 0;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector(".score").textContent = score;
  displayMessage("Start Guessing");
  document.querySelector(".body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
  document.querySelector(".guess").value = "";
  document.querySelector(".number").textContent = "?";
  document.querySelector(".highscore").textContent = highScore;
});
