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
    {x: 295, y: 295, color: 'white', dir: RIGHT},
    {x: 205, y: 295, color: 'blue', dir: RIGHT},
    {x: 205, y: 205, color: 'green', dir: DOWN},
    {x: 215, y: 205, color: 'red', dir: LEFT},
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

    ctx.fillStyle = turn.color
    ctx.fillRect(turn.x,turn.y, line.x, line.y)
  })
}

const calcLine = (i) => {
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

const forward = () => {
  let x, y
  // 1. Move turn 0 1 BLOCK_SIZE in its direction
  let head = state.turns[0]

  switch (head.dir){
    case RIGHT:
      state.turns[0].x = state.turns[0].x + BLOCK_SIZE
  }


  // 2. Remove 1 BLOCK_SIZE from turn[length-1]
  let tail = state.turns[state.turns.length-1]

  switch (tail.dir){
    case LEFT:
      tail.x = tail.x - BLOCK_SIZE
      break;
    case DOWN:
      tail.y = tail.y + BLOCK_SIZE
  }

  let next_tail = state.turns[state.turns.length-2]

  // remove tail if it's at
  console.log(`tail.x === next_tail.x && tail.y === next_tail.y`)
  console.log(`${tail.x} === ${next_tail.x} && ${tail.y} === ${next_tail.y}`)
  if (tail.x === next_tail.x && tail.y === next_tail.y) {
    state.turns.splice(-1)
    switch (next_tail.dir){
    case DOWN:
      next_tail.y = next_tail.y + BLOCK_SIZE
    }
  }
}

draw(document.querySelector('#gc'))
console.log('state before: ', state)
setTimeout(() => {
  forward()
  console.log('state after: ', state)
  draw(document.querySelector('#gc'))
  setTimeout(() => {
    forward()
    console.log('state after: ', state)
    draw(document.querySelector('#gc'))

  }, 5000)
}, 5000)
