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

export const up = (distance) => {
  return { type: 'UP', distance }
}

export const right = (distance) => {
  return { type: 'RIGHT', distance }
}

export const down = (distance) => {
  return { type: 'DOWN', distance }
}

export const left = (distance) => {
  return { type: 'LEFT', distance }
}

// export const moveBall = () => {
//   return { type: 'MOVE_BALL' }
// }

// export const bounceBallOffRoofOrFloor = () => {
//   return { type: 'BOUNCE_BALL_OFF_ROOF_OR_FLOOR'}
// }

// export const bounceBallOffRacket = (y_dir) => {
//   return {
//     type: 'BOUNCE_BALL_OFF_RACKET',
//     y_dir
//   }
// }

/**
 * player index
 * direction = -1 up, 1 = down
 */
// export const moveRacket = (i, direction) => {
//   return {
//     type: 'MOVE_RACKET',
//     i,
//     direction
//   }
// }

export const addScore = (i) => {
  return {
    type: 'ADD_SCORE',
    i
  }
}