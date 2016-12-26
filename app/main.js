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
    {x: 295, y: 295, length: 10, color: 'white', dir: RIGHT},
    {x: 285, y: 205, length: 100, color: 'red', dir: DOWN},
    {x: 205, y: 205, length: 80, color: 'green', dir: RIGHT}
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

  if (state.turns[i].dir == LEFT || state.turns[i].dir == RIGHT){
    x = state.turns[i].length
    y = BLOCK_SIZE
  } else {
    x = BLOCK_SIZE
    y = state.turns[i].length
  }

  return {
    x,
    y
  }
}

const forward = () => {
  let x, y
  // 1. Move turn 0 1 BLOCK_SIZE in its direction
  let head = state.turns[0]

  switch (head.dir){
    case UP:
      break
    case RIGHT:
      head.length += BLOCK_SIZE
      break
    case DOWN:
      break
    case LEFT:
      break

  }

  // 2. Remove 1 BLOCK_SIZE from turn[length-1]
  let tail = state.turns[state.turns.length-1]

  if (tail.length === BLOCK_SIZE){
    state.turns.pop()
  } else {
    switch (tail.dir){
      case UP:
        break
      case RIGHT:
        tail.x += BLOCK_SIZE
        tail.length -= BLOCK_SIZE
        break
      case DOWN:
        tail.y += BLOCK_SIZE
        tail.length -= BLOCK_SIZE
        break
      case LEFT:
        break
    }
  }

}

draw(document.querySelector('#gc'))
console.log('state before: ', state)
setInterval(() => {
  forward()
  console.log('state after: ', state)
  draw(document.querySelector('#gc'))
}, 1000)
