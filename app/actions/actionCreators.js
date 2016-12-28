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

export const forward = (distance) => {
  return { type: 'FORWARD', distance }
}

export const change_direction = (direction) => {
  return { type: 'CHANGE_DIRECTION', direction}
}

export const place_candy = (x, y) => {
  return { type: 'PLACE_CANDY', x, y}
}

export const addScore = (i) => {
  return {
    type: 'ADD_SCORE',
    i
  }
}
