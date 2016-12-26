export const Input = () => {
  let keys = {}
  let listeners = []
  let actions = {
    start: 'START',
    stop: 'STOP',
  }

  window.onkeydown = function(e) {
    keys[e.key] = true
  }
  window.onkeyup = function(e) {
    keys[e.key] = false
  }

  window.onkeypress = function(ev){
    switch(ev.key){
      case 'p':
        emit(actions.start)
        break;
      case 's':
        emit(actions.stop)
        break;
    }
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
