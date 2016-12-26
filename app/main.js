import { createStore } from 'redux'
import initialState from './initialState'
import createReducer from './reducers/reducer'
import { Game } from './game'
import Screen from './screen'
import { Input } from './input'
import * as directions from './directions'
import * as actions from './actions/actionCreators'

let store = createStore(createReducer(initialState),window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

let screen = Screen(document.getElementById('gc'))
let input = Input()

let game = Game(document.getElementById('gc'), screen, input, store, actions, directions)

game.tick()

window.onerror = function(messageOrEvent, source, lineno, colno, error){
  game.stop()
  console.log('Game stopped due to an unexpected exception.');
}
