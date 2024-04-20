"use strict";
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 10;
let highScore = 0;

// birçok yerde "document.querySelector(".message").textContent" bu ifade old. için bunu fonk. olarak yazdım, for clean code
const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess, typeof guess);
  //When there is no input
  if (!guess) {
    //document.querySelector(".message").textContent = "No number ☠️";
    displayMessage("No number ☠️");

    //when player wins
  } else if (guess === secretNumber) {
    //document.querySelector(".message").textContent = "Correct Number 🏆";
    displayMessage("Correct Number 🏆");
    document.querySelector(".number").textContent = secretNumber;

    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";

    if (score > highScore) {
      highScore = score;
      document.querySelector(".highscore").textContent = highScore;
    }
    //When guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      //document.querySelector(".message").textContent =
      // guess > secretNumber ? "Too high 📈" : "Too low 📉";
      displayMessage(guess > secretNumber ? "Too high 📈" : "Too low 📉");
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      //document.querySelector(".message").textContent = "Game Over 🏴‍☠️";
      displayMessage("Game Over 🏴‍☠️");
      document.querySelector(".score").textContent = 0;
      document.querySelector("body").style.backgroundColor = "#C82300";
    }
  }

  //   //When guess is too high
  // } else if (guess > secretNumber) {
  //   if (score > 1) {
  //     document.querySelector(".message").textContent = "Too high 📈";
  //     score--;
  //     document.querySelector(".score").textContent = score;
  //   } else {
  //     document.querySelector(".message").textContent = "Game Over 🏴‍☠️";
  //     document.querySelector(".score").textContent = 0;
  //     document.querySelector("body").style.backgroundColor = "#C82300";
  //   }
  //   //When guess is too low
  // } else if (guess < secretNumber) {
  //   if (score > 1) {
  //     document.querySelector(".message").textContent = "Too low 📉";
  //     score--;
  //     document.querySelector(".score").textContent = score;
  //   } else {
  //     document.querySelector(".message").textContent = "Game Over 🏴‍☠️";
  //     document.querySelector(".score").textContent = 0;
  //     document.querySelector("body").style.backgroundColor = "#C82300";
  //   }
  // }
});
document.querySelector(".again").addEventListener("click", function () {
  document.querySelector(".score").textContent = 10;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  // document.querySelector(".message").textContent = "Start guessing...";
  displayMessage("Start guessing...");
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
  document.querySelector(".guess").value = "";
  document.querySelector(".number").textContent = "?";
});
