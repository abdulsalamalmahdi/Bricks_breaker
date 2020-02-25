import Paddle from "../src/paddle.js";
import InputHandler from "../src/inputHandler";
import Ball from "../src/ball.js";
import { level1, buildBricks } from "./levels";

const GAMESTATE = {
  PAUSED: 0,
  RUNNING: 1,
  MENU: 2,
  GAMEOVER: 3
};

export default class Game {
  constructor(gameWidth, gameHeight) {
    this.gameWidth = gameWidth;
    this.gameHeight = gameHeight;
    this.gamestate = GAMESTATE.PAUSED;
  }

  start() {
    this.gamestate = GAMESTATE.MENU;

    this.ball = new Ball(this);
    this.paddle = new Paddle(this);
    new InputHandler(this.paddle, this);
    let bricks = buildBricks(this, level1);

    this.gameObjects = [this.ball, this.paddle, ...bricks];
  }

  update(deltaTime) {
    if (this.gamestate === GAMESTATE.PAUSED) {
      return;
    }

    this.gameObjects.forEach(obj => obj.update(deltaTime));
    this.gameObjects = this.gameObjects.filter(obj => !obj.markedForDeletion);
  }

  draw(ctx) {
    this.gameObjects.forEach(obj => obj.draw(ctx));
    if (this.gamestate === GAMESTATE.PAUSED) {
      ctx.rect(0, 0, this.gameWidth, this.gameHeight);
      ctx.fillStyle = (0, 0, 0, 0.5);
      ctx.fill();
      ctx.font = "30px Arial";
      ctx.fillStyle = "white";
      ctx.textAlign = "center";
      ctx.fillText("PAUSED", this.gameWidth / 2, this.gameHeight);
    }
  }
  togglePause() {
    if (this.gamestate === GAMESTATE.RUNNING) {
      this.gamesate = GAMESTATE.PAUSED;
    } else {
      return (this.gamesate = GAMESTATE.RUNNING);
    }
  }
}
