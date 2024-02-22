class Board {
  constructor() {
    this.startScreen = document.querySelector("#game-intro");
    this.gameScreen = document.querySelector("#game-screen");
    this.youWinScreen = document.querySelector("#game-win");
    this.gameEnd = document.querySelector("#game-end");
    this.scoreSpan = document.querySelector("#score");
    this.livesSpan = document.querySelector("#lives");
    this.showStats = document.querySelector("#stats");
    this.restartButton = document.querySelector("#therestartButton");
    this.height = 800;
    this.width = 800;
    this.gatorz = [];
    this.abuela = [];
    this.score = 0;
    this.lives = 3;
    this.gameOver = false;
    this.gameIntervalId = null;
    this.gameLoopFrequency = 1000 / 100;
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
    this.restartButton.style.display = "none";

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
        this.divs[i].style.left = xStart + "px";
        this.divs[i].style.top = yStart + "px";
        this.divs[i].style.width = "70px";
        this.divs[i].style.height = "40px";
        this.divs[i].style.zIndex = "10";
        this.divs[i].style.position = "absolute";
        this.divs[i].setAttribute("id", "holes");

        xStart += 127;
      } else if (i >= 5 && i < 10) {
        this.gameScreen.appendChild(this.divs[i]);
        console.log("Hello from xStart", xStart);
        yStart = 325;
        this.divs[i].style.left = `${xStart - (10 - i) * 127}` + "px";
        this.divs[i].style.top = yStart + "px";
        this.divs[i].style.width = "70px";
        this.divs[i].style.height = "40px";
        this.divs[i].style.zIndex = "10";
        this.divs[i].style.position = "absolute";
        this.divs[i].setAttribute("id", "holes");
      } else {
        this.gameScreen.appendChild(this.divs[i]);
        console.log("Hello from xStart", xStart);
        yStart = 500;
        this.divs[i].style.left = `${xStart - (15 - i) * 127}` + "px";
        this.divs[i].style.top = yStart + "px";
        this.divs[i].style.width = "70px";
        this.divs[i].style.height = "40px";
        this.divs[i].style.zIndex = "10";
        this.divs[i].style.position = "absolute";
        this.divs[i].setAttribute("id", "holes");
      }
    }

    // Hide the start screen
    this.startScreen.style.display = "none";

    // Show the game screen
    this.gameScreen.style.display = "flex";
    this.showStats.style.display = "block";
    // this.scoreSpan.innerText =  this.score
    // Runs the gameLoop on a fequency of 60 times per second. Also stores the ID of the interval.
    this.gameIntervalId = setInterval(() => {
      this.gameLoop();
    }, this.gameLoopFrequency);
  }

  addGator() {
    let gatorImg = document.createElement("img");
    let clicked = false;
    gatorImg.setAttribute("id", "ROAR");
    gatorImg.src = "../Images/gatorz.png";
    gatorImg.style.width = 80 + "px";
    gatorImg.style.height = 80 + "px";
    let randomIndex = Math.floor(Math.random() * this.divs.length);
    this.divs[randomIndex].appendChild(gatorImg);

    gatorImg.addEventListener("click", (e) => {
      console.log("Whut up");
      gatorImg.remove();
      clicked = true;
      this.score += 10;
      this.scoreSpan.innerText = `${this.score}`;
      console.log(this.score);
      if (this.score === 200) {
        this.youWon();
        this.gameOver = true;
        
      }
    });

    setTimeout(() => {
      if (!clicked) {
        this.divs[randomIndex].removeChild(gatorImg);
        this.lives -= 1;
        this.livesSpan.innerText = `${this.lives}`;
      }
      if (this.lives <= 0) {
        console.log("YOOOOOOOOOOOOOO");
        this.gameOver = true;
        this.gameISover();
      }
    }, 1500);
  }

  addAbuela() {
    let abuelaIMG = document.createElement("img");
    abuelaIMG.setAttribute("id", "grandma");
    abuelaIMG.src = "../Images/grandmama.png";
    abuelaIMG.style.width = 80 + "px";
    abuelaIMG.style.height = 90 + "px";
    let clicked = false;
    let randomIndex = Math.floor(Math.random() * this.divs.length);

    this.divs[randomIndex].appendChild(abuelaIMG);

    abuelaIMG.addEventListener("click", (e) => {
      console.log("you darn kids");
      abuelaIMG.remove();
      clicked = true;
      this.lives -= 1;
      this.livesSpan.innerText = `${this.lives}`;
      console.log(this.lives);
    });

    setTimeout(() => {
      if (clicked) {
        this.livesSpan.innerText = `${this.lives}`;
      } else if (!clicked) {
        this.divs[randomIndex].removeChild(abuelaIMG);
      }
      if (this.lives <= 0) {
        console.log("IM ABUELITA");
        this.gameOver = true;
        this.gameISover();
      }
    }, 1500);
  }

  gameLoop() {
    this.frames += 3;
    const randomNumber = Math.floor(Math.random() * 2);
    console.log(this.lives);
    if (this.frames % 120 === 0) {
      if (randomNumber) {
        this.addGator();
      } else {
        this.addAbuela();
      }
    }

    // If "gameIsOver" is set to "true" clear the interval to stop the loop
    if (this.gameOver) {
      console.log("HEEYEYEYEYEYEYEYE");
      clearInterval(this.gameIntervalId);
    }
  }



  gameISover() {
    // this.gameOver=true;
    this.restartButton.style.display = "flex";
    console.log(this.gameScreen);
    console.log(this.gameEnd);
    this.gameScreen.style.display = "none";
    // Set the height and width of the game screen
    this.gameEnd.style.height = `${this.height}px`;
    this.gameEnd.style.width = `${this.width}px`;
    this.gameEnd.style.display = "flex";
  }

  Restart() {
    this.livesSpan.innerText = 3;
    this.scoreSpan.innerText = 0;
    this.lives = 3;
    this.score = 0;
    this.gameEnd.style.display = "none";
    this.youWinScreen.style.display="none" ;
    this.gameOver = false;
  }


  youWon() {
    this.gameScreen.style.display = "none";
    this.youWinScreen.style.height = `${this.height}px`;
    this.youWinScreen.style.width = `${this.width}px`;
    console.log("YOU HAVE WOOON!!!!!")
    this.youWinScreen.style.display = "flex";
    this.restartButton.style.display = "flex";    

  }
}
