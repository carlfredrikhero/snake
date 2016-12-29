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
    case 'RESET':
      return Object.assign({}, action.state)
    case 'SET_CANVAS':
      return Object.assign({}, state, {
        canvas: {
          w: action.w,
          h: action.h
        }
      })
    case 'CHANGE_DIRECTION':
      switch (action.direction){
        case 'left':
        case 'right':
          if (state.direction === 'left' || state.direction === 'right'){
            return state
          }
          break
        case 'up':
        case 'down':
          if (state.direction === 'up' || state.direction === 'down'){
            return state
          }
      }
      return Object.assign({}, state, {
        direction: action.direction
      })
    case 'GROW':
      return Object.assign({}, state, {
        grow: state.grow + action.length
      })
    case 'POSITION_SNAKE':
    case 'FORWARD':
      return Object.assign({}, state, {
        snake: snake(state.snake, action, state.direction, state.grow)
      })
    case 'ADD_SCORE':
      return Object.assign({}, state, {
        score: state.score + 1
      })
    case 'PLACE_CANDY':
      return Object.assign({}, state, {
        candy: {x: action.x, y: action.y}
      })
    case 'CLEAR_CANDY':
      return Object.assign({}, state, {
        candy: null
      })
    default:
      return state
  }
}

const snake = (state, action, direction, grow) => {
  switch (action.type){
    case 'POSITION_SNAKE':
      return [5,4,3,2,1].map((i) => {
        return {x: i, y: 10}
      })
    case 'FORWARD':
      // take the tail and place it in front of the head

      // TODO if grow, create new head instead of moving the tail

      let old_head = state.slice(0,1)[0]
      let new_head = (grow) ? Object.assign({}, old_head) : state.pop()

      switch (direction){
        case 'up':
          new_head.x = old_head.x
          new_head.y = old_head.y-1
          break
        case 'right':
          new_head.x = old_head.x+1
          new_head.y = old_head.y
          break
        case 'down':
          new_head.x = old_head.x
          new_head.y = old_head.y+1
          break
        case 'left':
          new_head.x = old_head.x-1
          new_head.y = old_head.y
          break
      }

      return [new_head, ...state]
    default:
      return state
  }
}
