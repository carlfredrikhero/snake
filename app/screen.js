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
    drawSnake(state.turns, BLOCK_SIZE)
  }

  const drawScore = (score) => {
    ctx.fillStyle = 'white'
    ctx.font='12px monospace';

    ctx.fillText(('00' + score).substr(-3), 10, 20);
  }

  const drawSnake = (turns, BLOCK_SIZE) => {
    ctx.fillStyle = 'white'
    turns.forEach((turn) => {
      let line = calcLine(turn, BLOCK_SIZE)

      ctx.fillStyle = turn.color
      ctx.fillRect(turn.x,turn.y, line.x, line.y)
    })
  }

  const calcLine = (turn, BLOCK_SIZE) => {
    let x, y

    x = y = BLOCK_SIZE

    if (turn.dir == directions.LEFT || turn.dir == directions.RIGHT){
      x = turn.length
    } else {
      y = turn.length
    }

    return { x, y }
  }

  return {
    render
  }
}
