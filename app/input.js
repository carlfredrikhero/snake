export const Input = () => {
  let keys = {}
  let listeners = []
  let actions = {
    p: 'start',
    s: 'stop',
    up: 'up',
    right: 'right',
    down: 'down',
    left: 'left',
  }

  window.onkeydown = function(e) {
    keys[e.key] = true

    let arrows = [e.key]
    .map(key => key.toLowerCase())
    .map(key => key.replace('arrow', ''))
    .filter(key => key in actions)
    .forEach(key => emit(actions[key]))
  }
  window.onkeyup = function(e) {
    keys[e.key] = false
  }

  const subscribe = (listener) => {
    listeners.push(listener);

    return function unsubscribe(){
      let index = listeners.indexOf(listener)
      listeners.splice(index, 1)
    }
  }

  const emit = (action) => {
    for (let i = 0; i < listeners.length; i++) {
      let listener = listeners[i]
      listener(action)
    }
  }

  return {
    subscribe,
    keys
  }
}
