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
    turns.forEach((turn, index) => {
      let line = calcLine(index, BLOCK_SIZE)

      ctx.fillStyle = turn.color
      ctx.fillRect(turn.x,turn.y, line.x, line.y)
    })
  }

  const calcLine = (i, BLOCK_SIZE) => {
    let x, y

    if (i) {
      x = (state.turns[i-1].x - state.turns[i].x)
      y = (state.turns[i-1].y - state.turns[i].y)
    } else {
      x = y = BLOCK_SIZE
    }

    return {
      x: (x) ? x : BLOCK_SIZE,
      y: (y) ? y : BLOCK_SIZE
    }
  }

  return {
    render
  }
}
