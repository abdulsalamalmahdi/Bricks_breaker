export function collisionDetection(ball, gameObject) {
  let ballTop = ball.position.y;
  let ballBottom = ball.position.y + ball.size;
  let objectTop = gameObject.position.y;
  let objectBottom = gameObject.position.y + gameObject.height;
  let objectLeftSide = gameObject.position.x;
  let objectRightSide = gameObject.position.x + gameObject.width;

  if (
    ballBottom >= objectTop &&
    ballTop <= objectBottom &&
    ball.position.x >= objectLeftSide &&
    ball.position.x + ball.size <= objectRightSide
  ) {
    return true;
  } else {
    return false;
  }
}
