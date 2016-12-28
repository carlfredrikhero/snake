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
    case 'CHANGE_DIRECTION':
      return Object.assign({}, state, {
        direction: action.direction
      })
    case 'POSITION_SNAKE':
    case 'FORWARD':
      return Object.assign({}, state, {
        snake: snake(state.snake, action, state.direction)
      })
    case 'ADD_SCORE':
      return Object.assign({}, state, {
        score: state.score + 1
      })
    case 'PLACE_CANDY':
      return Object.assign({}, state, {
        candy: {x: action.x, y: action.y}
      })
    default:
      return state
  }
}

const snake = (state, action, direction) => {
  switch (action.type){
    case 'POSITION_SNAKE':
      return [5,4,3,2,1].map((i) => {
        return {x: i, y: 10}
      })
    case 'FORWARD':
      // take the tail and place it in front of the head
      let head = state.slice(0,1)[0]
      let tail = state.slice(-1)[0]

      switch (direction){
        case 'up':
          tail.x = head.x
          tail.y = head.y-1
          break
        case 'right':
          tail.x = head.x+1
          tail.y = head.y
          break
        case 'down':
          tail.x = head.x
          tail.y = head.y+1
          break
        case 'left':
          tail.x = head.x-1
          tail.y = head.y
          break
      }

      return [tail, ...state.slice(0,-1)]
    default:
      return state
  }
}
