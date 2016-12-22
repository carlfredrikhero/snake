const UP = 'up';
const DOWN = 'down';
const LEFT = 'left';
const RIGHT = 'right';

const BLOCK_SIZE = 10;


const directions = {
  up: UP,
  down: DOWN,
  left: LEFT,
  right: RIGHT
}

const state = {
  dir: undefined,
  add: 0,
  length: 1,
  turns: [
    {x: 295, y: 295},
    {x: 205, y: 295},
    {x: 205, y: 205},
    {x: 455, y: 205},
  ]
}


const draw = (el) => {
  const ctx = el.getContext('2d');

  // draw canvas
  ctx.fillStyle = 'black'
  ctx.fillRect(0,0, el.width, el.height)

  // draw snake
  ctx.fillStyle = 'white'

  state.turns.forEach((turn, index) => {
    let line = calcLine(index)

    if (line) {
      //console.log(index, line, turn)
      console.log(turn.x,turn.y, line.x, line.y)
      ctx.fillRect(turn.x,turn.y, line.x, line.y)
    }
  })
}

const calcLine = (i) => {
  if (!i){
    return false;
  }

  let x = (state.turns[i-1].x - state.turns[i].x)
  let y = (state.turns[i-1].y - state.turns[i].y)

  return {
    x: (x) ? x : BLOCK_SIZE,
    y: (y) ? y : BLOCK_SIZE
  }
}

draw(document.querySelector('#gc'))
