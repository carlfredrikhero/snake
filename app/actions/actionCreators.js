export const setCanvas = (w, h) => {
  return {
    type: 'SET_CANVAS',
    w,
    h
  }
}

export const positionSnake = (x, y, dir, length) => {
  return {
    type: 'POSITION_SNAKE',
    x,
    y,
    dir,
    length
  }
}

// export const positionRacket = (i, x, y) => {
//   return {
//     type: 'POSITION_RACKET',
//     i,
//     x,
//     y
//   }
// }

export const start = () => {
  return { type: 'START' }
}

export const stop = () => {
  return { type: 'STOP' }
}

export const reset = (state) => {
  return { type: 'RESET', state }
}

export const forward = (distance) => {
  return { type: 'FORWARD', distance }
}

export const changeDirection = (direction) => {
  return { type: 'CHANGE_DIRECTION', direction}
}

export const up = () => {
  return changeDirection('up')
}

export const right = () => {
  return changeDirection('right')
}

export const down = () => {
  return changeDirection('down')
}

export const left = () => {
  return changeDirection('left')
}

export const placeCandy = (x, y) => {
  return { type: 'PLACE_CANDY', x, y}
}

export const clearCandy = () => {
  return { type: 'CLEAR_CANDY'}
}

export const grow = (length) => {
  return { type: 'GROW', length}
}

export const addScore = (i) => {
  return {
    type: 'ADD_SCORE',
    i
  }
}
