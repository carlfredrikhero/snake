export default (initialState) => (state = initialState, action) => {
  switch (action.type){
    case 'START':
      return Object.assign({}, state, {
        running: true
      })
    case 'STOP':
      return Object.assign({}, state, {
        running: false
      })
    case 'SET_CANVAS':
      return Object.assign({}, state, {
        canvas: {
          w: action.w,
          h: action.h
        }
      })
    case 'POSITION_SNAKE':
    case 'FORWARD':
    case 'UP':
    case 'RIGHT':
    case 'DOWN':
    case 'LEFT':
      return Object.assign({}, state, {
        turns: snake(state.turns, action)
      })
    // case 'POSITION_RACKET':
    // case 'MOVE_RACKET':
    //   return Object.assign({}, state, {
    //     players: state.players.map((player, index) => {
    //       if (action.i !== index) {
    //         return player
    //       }

    //       return {
    //         score: player.score,
    //         racket: racket(player.racket, action)
    //       }
    //     })
    //   })
    case 'ADD_SCORE':
      return Object.assign({}, state, {
        score: state.score + 1
      })
    default:
      return state
  }
}

const snake = (state, action) => {
  switch (action.type){
    case 'POSITION_SNAKE':
      return [{x: action.x, y: action.y, dir: action.dir, length: action.length}]
    // case 'MOVE_BALL':
    //   return Object.assign({}, state, {
    //     x: state.x + state.x_dir,
    //     y: state.y + state.y_dir
    //   })
    // case 'BOUNCE_BALL_OFF_ROOF_OR_FLOOR':
    //   return Object.assign({}, state, {
    //     y_dir: state.y_dir *= -1
    //   })
    // case 'BOUNCE_BALL_OFF_RACKET':
    //   return Object.assign({}, state, {
    //     x_dir: state.x_dir *= -1,
    //     y_dir: action.y_dir
    //   })
    case 'FORWARD':
      // 1. move head 1 BLOCKSIZE in its direction
      let head = state.slice(0,1)[0]
      switch (head.dir) {
        case 'up':
          head.y -= action.distance
          head.length += (state.length > 1) ? action.distance : 0
          break
        case 'right':
          head.x += action.distance
          head.length -= (state.length > 1) ? action.distance : 0
          break
        case 'down':
          head.y += action.distance
          head.length -= (state.length > 1) ? action.distance : 0
          break
        case 'left':
          head.x -= action.distance
          head.length += (state.length > 1) ? action.distance : 0
          break
      }

      if (state.length > 1) {
        let tail = state.slice(-1)[0]
        switch (tail.dir) {
          case 'up':
            head.length -= action.distance
            break
          case 'right':
            tail.length -= action.distance
            break
          case 'down':
            tail.length -= action.distance
            break
          case 'left':
            tail.length -= action.distance
            break
        }

        return [head, ...state.slice(1, -1), tail]
      }

      return [head, ...state.slice(1)]
      // 2. move tail 1 BLOCKSIZE in its direction
      // 3. if the tail equals the next tail, remove and move next tail instead
    case 'UP':
      head = state.slice(0,1)[0]
      let new_head = {
        x: head.x,
        y: head.y - action.distance,
        length: action.distance,
        dir: action.type.toLowerCase()
      }

      return [new_head, ...state]
    default:
      return state
  }
}
