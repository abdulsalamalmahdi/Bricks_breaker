import Game from "./game";

let canvas = document.getElementById("gameScreen");
let ctx = canvas.getContext("2d");

const GAME_WIDTH = 800;
const GAME_HEIGHT = 600;

let game = new Game(GAME_WIDTH, GAME_HEIGHT);
game.start();

let lastTime = 0;
const loop = ts => {
  let deltaTime = ts - lastTime;
  lastTime = ts;
  ctx.clearRect(0, 0, GAME_WIDTH, GAME_HEIGHT);

  game.draw(ctx);
  game.update(deltaTime);
  requestAnimationFrame(loop);
};
requestAnimationFrame(loop);
