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

      // is arrow key down?

      Object.values(directions).forEach(() => {

      })

      // is snake touching a candy?

      // is snake touch a wall?

      store.dispatch(actions.forward(BLOCK_SIZE))
    }

    screen.render(store.getState(), BLOCK_SIZE)
  }

  const start = () => {
    step()
  }

  const step = () => {
    timerId = setInterval(tick, 1000)
  }

  const stop = () => {
    clearInterval(timerId)
  }

  const reset = () => {
    store.dispatch(actions.stop())
    store.dispatch(actions.positionBall(canvas.width/2, canvas.height/2))
    setTimeout(() => {
      store.dispatch(actions.start())
    }, 3000)
  }

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
    switch(action){
      case 'START':
        store.dispatch(actions.start())
        break;
      case 'STOP':
        store.dispatch(actions.stop())
    }
  })


  // update store with default settings
  store.dispatch(actions.setCanvas(canvas.width, canvas.height));
  // place snake in the middle
  store.dispatch(
    actions.positionSnake(
        (canvas.width/2)-(BLOCK_SIZE/2),
        (canvas.height/2)-(BLOCK_SIZE/2),
        directions.RIGHT,
        BLOCK_SIZE*3
    )
  )

  return { tick, stop }
}
