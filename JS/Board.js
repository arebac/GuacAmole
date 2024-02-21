class Board {
  constructor() {
    this.startScreen = document.querySelector("#game-intro");
    this.gameScreen = document.querySelector("#game-screen");
    this.gameEnd = document.getElementById("game-end");
    this.height = 800;
    this.width = 800;
    this.gatorz = [];
    this.score = 0;
    this.lives = 3;
    this.gameOver = false;
    this.gameIntervalId = null;
    this.gameLoopFrequency = 1000 / 60;
    this.frames = 0;
    let newDiv1 = document.createElement("div");
    let newDiv2 = document.createElement("div");
    let newDiv3 = document.createElement("div");
    let newDiv4 = document.createElement("div");
    let newDiv5 = document.createElement("div");
    let newDiv6 = document.createElement("div");
    let newDiv7 = document.createElement("div");
    let newDiv8 = document.createElement("div");
    let newDiv9 = document.createElement("div");
    let newDiv10 = document.createElement("div");
    let newDiv11 = document.createElement("div");
    let newDiv12 = document.createElement("div");
    let newDiv13 = document.createElement("div");
    let newDiv14 = document.createElement("div");
    let newDiv15 = document.createElement("div");

    this.divs = [
      newDiv1,
      newDiv2,
      newDiv3,
      newDiv4,
      newDiv5,
      newDiv6,
      newDiv7,
      newDiv8,
      newDiv9,
      newDiv10,
      newDiv11,
      newDiv12,
      newDiv13,
      newDiv14,
      newDiv15,
    ];
  }

  start() {
    console.log(this.gameScreen);
    console.log(this.gameEnd);
    // Set the height and width of the game screen
    this.gameScreen.style.height = `${this.height}px`;
    this.gameScreen.style.width = `${this.width}px`;

    let xStart = 105;
    let yStart = 110;

    for (let i = 0; i < this.divs.length; i++) {
      if (i < 5) {
        this.gameScreen.appendChild(this.divs[i]);
        this.divs[i].style.left = xStart+ "px";
        this.divs[i].style.top = yStart + "px";
        this.divs[i].style.width = "70px";
        this.divs[i].style.height = "40px";
        this.divs[i].style.zIndex = "10";
        this.divs[i].style.position = "absolute";
        this.divs[i].setAttribute("id","holes")

        xStart += 127;
      } else if (i >= 5 && i < 10) {
        this.gameScreen.appendChild(this.divs[i]);
        console.log("Hello from xStart", xStart);
        yStart = 325;
        this.divs[i].style.left = `${xStart - (10 - i) * 127}` + "px";
        this.divs[i].style.top = yStart   + "px";
        this.divs[i].style.width = "70px";
        this.divs[i].style.height = "40px";
        this.divs[i].style.zIndex = "10";
        this.divs[i].style.position = "absolute";
        this.divs[i].setAttribute("id","holes")

      } else {
        this.gameScreen.appendChild(this.divs[i]);
        console.log("Hello from xStart", xStart);
        yStart = 500;
        this.divs[i].style.left = `${xStart - (15 - i) * 127}` + "px";
        this.divs[i].style.top =yStart + "px";
        this.divs[i].style.width = "70px";
        this.divs[i].style.height = "40px";
        this.divs[i].style.zIndex = "10";
        this.divs[i].style.position = "absolute";
        this.divs[i].setAttribute("id","holes")

      }
    }

    // Hide the start screen
    this.startScreen.style.display = "none";

    // Show the game screen
    this.gameScreen.style.display = "flex";

    // Runs the gameLoop on a fequency of 60 times per second. Also stores the ID of the interval.
    this.gameIntervalId = setInterval(() => {
      this.gameLoop();
    }, this.gameLoopFrequency);
  }

  addGator() {
    let gatorImg = document.createElement("img");
    gatorImg.setAttribute("id","ROAR")
    console.log(gatorImg.id)
    gatorImg.src = "../Images/gatorz.png";
    gatorImg.style.width = 80 + "px";
    gatorImg.style.height = 70 + "px";

    let randomIndex = Math.floor(Math.random() * this.divs.length);

    this.divs[randomIndex].appendChild(gatorImg);

    setTimeout(() => {

      this.divs[randomIndex].removeChild(gatorImg);
    }, 3000);
  }

  gameLoop() {
    this.frames += 1;
    if (this.frames % 120 === 0) {
      this.addGator();
    }

    // If "gameIsOver" is set to "true" clear the interval to stop the loop
    if (this.gameOver) {
      clearInterval(this.gameIntervalId);
    }
  }

}
