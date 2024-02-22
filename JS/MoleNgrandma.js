class MoleNgrandma {
    constructor(gameScreen) {
        this.gameScreen = gameScreen
        this.left = (Math.random() * 300) + 100
        this.top = -150
        this.width = 100
        this.height = 150
        this.element = document.createElement("img");
        this.element.src = '../Images/gatorz.png';
        this.element2 = document.createElement("img2");
        this.element.src = '../Images/grandmama.png';
        this.element.style.position = "absolute";
        this.element.style.left = `${this.left}px`;
        this.element.style.top = `${this.top}px`;
        this.element.style.width = `${this.width}px`;
        this.element.style.height = `${this.height}px`;
        this.element2.style.position = "absolute";
        this.element2.style.left = `${this.left}px`;
        this.element2.style.top = `${this.top}px`;
        this.element2.style.width = `${this.width}px`;
        this.element2.style.height = `${this.height}px`;
    
        this.gameScreen.appendChild(this.element);
        this.gameScreen.appendChild(this.element2);
    }

    move() {
        this.top += 3
        this.updatePosition()
    }

    updatePosition() {
        this.element.style.left = this.left + "px";
        this.element.style.top = this.top + "px";
        this.element2.style.left = this.left + "px";
        this.element2.style.top = this.top + "px";
    }
}