export default class Paddle {
  constructor(game) {
    this.width = 150;
    this.height = 30;
    this.maxSpeed = 5;
    this.speed = 0;

    this.gameWidth = game.gameWidth;
    this.gameHeight = game.gameHeight;
    this.position = {
      x: this.gameWidth / 2 - this.width / 2,
      y: this.gameHeight / 2 - this.height + 300
    };
  }

  moveLeft() {
    this.speed = -this.maxSpeed;
  }

  moveRight() {
    this.speed = +this.maxSpeed;
  }

  stop() {
    this.speed = 0;
  }

  draw(ctx) {
    ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
  }
  update() {
    this.position.x += this.speed;
    if (this.position.x < 0) {
      this.position.x = 0;
    }

    if (this.position.x + this.width > this.gameWidth) {
      this.position.x = this.gameWidth - this.width;
    }
  }
}
