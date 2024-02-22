

window.onload = function () {
  const startButton = document.getElementById("start-button");
  const restartButton = document.getElementById("restartButton");
  let game;
  startButton.addEventListener("click", function () {
    startGame();
  });
};



function startGame() {
  console.log("start game");
  game = new Board();
  game.start();
}




let restartButton = document.querySelector("#restartButton");
restartButton.addEventListener("click", resetButtonHandler);


function resetButtonHandler() {
  // 1. Hide the quiz view (div#quizView)
  game.Restart();
  game.start();
}
