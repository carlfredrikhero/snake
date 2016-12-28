export const Game = (canvas, screen, input, store, actions, directions) => {
  let state = store.getState()
  let running = state.running
  let timerId

  const BLOCK_SIZE = 10;

    /**
 * Runs all things for each frame
 */
  const tick = () => {
    let state = store.getState()

    if (running) {
      // # trigger all actions

      // place candy
      if (state.candy === null){
        let min = 1
        let max = (canvas.width/10)
        store.dispatch(actions.placeCandy(
          Math.floor(Math.random() * (max - min)) + min,
          Math.floor(Math.random() * (max - min)) + min
        ))
      }


      // is snake touching a candy?

      // is snake touch a wall?

      store.dispatch(actions.forward(BLOCK_SIZE))
      if (state.grow){
        store.dispatch(actions.grow(-1))
      }

      state = store.getState()

      if (state.snake[0].x == state.candy.x &&
          state.snake[0].y == state.candy.y) {
        store.dispatch(actions.addScore())
        store.dispatch(actions.grow(1))
        store.dispatch(actions.clearCandy())
      }
    }

    screen.render(store.getState(), BLOCK_SIZE)
  }

  const start = () => {
    step()
  }

  const step = () => {
    timerId = setInterval(tick, 200)
  }

  const stop = () => {
    clearInterval(timerId)
  }

  // const reset = () => {
  //   store.dispatch(actions.stop())
  //   store.dispatch(actions.positionBall(canvas.width/2, canvas.height/2))
  //   setTimeout(() => {
  //     store.dispatch(actions.start())
  //   }, 3000)
  // }

  store.subscribe(() => {
    let state = store.getState()
    let old_running = running
    let changed = (running !== state.running)
    running = state.running

    if (!old_running && changed) start()

    if (old_running && changed) stop()
  })

  input.subscribe(function(action){
    console.log(action)
    store.dispatch(actions[action]())
  })


  // update store with default settings
  store.dispatch(actions.setCanvas(canvas.width, canvas.height));
  // place snake in the middle
  store.dispatch(
    actions.positionSnake(10, 10)
  )

  return { tick, stop }
}
