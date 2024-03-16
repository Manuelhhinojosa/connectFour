let player = 1;
const squares = document.querySelectorAll(".connect-four-container div");
const turnText = document.querySelector(".current-player-container h2");
const turnContainer = document.querySelector(".current-player-container");
const invalidMoveText = document.querySelector(".valid-move-container h2");
const invalidMovecontainer = document.querySelector(".valid-move-container");
const gameContainer = document.querySelector(".connect-four-container");
const resetBtn = document.querySelector("button");
const winningCombinations = [
  [0, 1, 2, 3],
  [41, 40, 39, 38],
  [7, 8, 9, 10],
  [34, 33, 32, 31],
  [14, 15, 16, 17],
  [27, 26, 25, 24],
  [21, 22, 23, 24],
  [20, 19, 18, 17],
  [28, 29, 30, 31],
  [13, 12, 11, 10],
  [35, 36, 37, 38],
  [6, 5, 4, 3],
  [0, 7, 14, 21],
  [41, 34, 27, 20],
  [1, 8, 15, 22],
  [40, 33, 26, 19],
  [2, 9, 16, 23],
  [39, 32, 25, 18],
  [3, 10, 17, 24],
  [38, 31, 24, 17],
  [4, 11, 18, 25],
  [37, 30, 23, 16],
  [5, 12, 19, 26],
  [36, 29, 22, 15],
  [6, 13, 20, 27],
  [35, 28, 21, 14],
  [0, 8, 16, 24],
  [41, 33, 25, 17],
  [7, 15, 23, 31],
  [34, 26, 18, 10],
  [14, 22, 30, 38],
  [27, 19, 11, 3],
  [35, 29, 23, 17],
  [6, 12, 18, 24],
  [28, 22, 16, 10],
  [13, 19, 25, 31],
  [21, 15, 9, 3],
  [20, 26, 32, 38],
  [36, 30, 24, 18],
  [5, 11, 17, 23],
  [37, 31, 25, 19],
  [4, 10, 16, 22],
  [2, 10, 18, 26],
  [39, 31, 23, 15],
  [1, 9, 17, 25],
  [40, 32, 24, 16],
  [9, 17, 25, 33],
  [8, 16, 24, 32],
  [11, 17, 23, 29],
  [12, 18, 24, 30],
  [1, 2, 3, 4],
  [5, 4, 3, 2],
  [8, 9, 10, 11],
  [12, 11, 10, 9],
  [15, 16, 17, 18],
  [19, 18, 17, 16],
  [22, 23, 24, 25],
  [26, 25, 24, 23],
  [29, 30, 31, 32],
  [33, 32, 31, 30],
  [36, 37, 38, 39],
  [40, 39, 38, 37],
  [7, 14, 21, 28],
  [8, 15, 22, 29],
  [9, 16, 23, 30],
  [10, 17, 24, 31],
  [11, 18, 25, 32],
  [12, 19, 26, 33],
  [13, 20, 27, 34],
];

function whoIsTheWinner() {
  for (let i = 0; i < winningCombinations.length; i++) {
    const positionOne = squares[winningCombinations[i][0]];
    const positionTwo = squares[winningCombinations[i][1]];
    const positionThree = squares[winningCombinations[i][2]];
    const positionFour = squares[winningCombinations[i][3]];

    if (
      positionOne.classList.contains("player-one") &&
      positionTwo.classList.contains("player-one") &&
      positionThree.classList.contains("player-one") &&
      positionFour.classList.contains("player-one")
    ) {
      invalidMoveText.innerText = "Player One Wins!";
      invalidMovecontainer.style.backgroundColor = "hotpink";
      turnText.setAttribute("id", "hide");
      turnContainer.setAttribute("id", "hide");
      gameContainer.setAttribute("id", "hide");
      resetBtn.style.display = "block";
    } else if (
      positionOne.classList.contains("player-two") &&
      positionTwo.classList.contains("player-two") &&
      positionThree.classList.contains("player-two") &&
      positionFour.classList.contains("player-two")
    ) {
      turnText.setAttribute("id", "hide");
      turnContainer.setAttribute("id", "hide");
      invalidMoveText.innerText = "Player Two Wins!";
      gameContainer.setAttribute("id", "hide");
      invalidMovecontainer.style.backgroundColor = "greenyellow";
      resetBtn.style.display = "block";
    }
  }
}

function resetGame() {
  for (let i = 0; i < squares.length; i++) {
    if (squares[i].classList.contains("occupied") && i < 42) {
      squares[i].classList.remove("invalid");
      squares[i].classList.remove("occupied");
      squares[i].style.cursor = "help";
      squares[i].classList.remove("player-one");
      squares[i].classList.remove("player-two");
      invalidMoveText.innerText = "Welcome";
      invalidMovecontainer.style.backgroundColor = "orange";
      turnText.removeAttribute("id");
      turnContainer.removeAttribute("id");
      turnContainer.style.backgroundColor = "hotpink";
      turnText.innerText = "player One starts";
      player = 1;
      resetBtn.style.display = "none";
      gameContainer.removeAttribute("id", "hide");
    }
  }
}

for (let i = 0; i < squares.length; i++) {
  if (squares[i].classList.contains("click")) {
    squares[i].addEventListener("click", function () {
      if (
        squares[i + 7].classList.contains("invalid") &&
        !squares[i].classList.contains("invalid")
      ) {
        if (player === 1) {
          squares[i].classList.add("invalid");
          squares[i].classList.add("occupied");
          squares[i].style.cursor = "not-allowed";
          squares[i].classList.add("player-one");
          turnText.innerText = "Player Two's Turn";
          invalidMoveText.innerText = "Player One, Your Move Is Valid";
          turnContainer.style.backgroundColor = "greenyellow";
          invalidMovecontainer.style.backgroundColor = "orange";
          player = 2;
        } else if (player === 2) {
          squares[i].classList.add("invalid");
          squares[i].classList.add("occupied");
          squares[i].style.cursor = "not-allowed";
          squares[i].classList.add("player-two");
          turnText.innerText = "Player One's Turn";
          invalidMoveText.innerText = "Player Two, Your Move Is Valid";
          invalidMovecontainer.style.backgroundColor = "orange";
          turnContainer.style.backgroundColor = "hotpink";
          player = 1;
        }
      } else {
        invalidMoveText.innerText = "Not a valid move, try again.";
        invalidMovecontainer.style.backgroundColor = "red";
      }
      whoIsTheWinner();
    });
  }
}

resetBtn.addEventListener("click", () => {
  resetGame();
});
