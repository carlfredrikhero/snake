import * as directions from './directions'

export default Screen = (el) => {
  let ctx = el.getContext('2d');
  const render = (state, BLOCK_SIZE) => {
    // draw canvas
    ctx.fillStyle = 'black'
    ctx.fillRect(0,0, el.width, el.width)

    // draw_scores
    drawScore(state.score)

    // draw_rackets
    drawSnake(state.snake, BLOCK_SIZE)

    if (state.candy !== null) {
      drawCandy(state.candy.x, state.candy.y, BLOCK_SIZE)
    }
  }

  const drawScore = (score) => {
    ctx.fillStyle = 'white'
    ctx.font='12px monospace';

    ctx.fillText(('00' + score).substr(-3), 10, 20);
  }

  const drawSnake = (snake, BLOCK_SIZE) => {
    ctx.fillStyle = 'white'
    snake.forEach((cell) => {
      ctx.fillRect(
        cell.x*BLOCK_SIZE,
        cell.y*BLOCK_SIZE,
        BLOCK_SIZE,
        BLOCK_SIZE
      )
    })
  }

  const drawCandy = (x, y, BLOCK_SIZE) => {
    ctx.fillStyle = 'green'
    ctx.fillRect(
        x*BLOCK_SIZE,
        y*BLOCK_SIZE,
        BLOCK_SIZE,
        BLOCK_SIZE
      )
  }

  return {
    render
  }
}
