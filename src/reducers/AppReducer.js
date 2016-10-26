import {createAction} from 'redux-actions'

// ------------------------------------
// Constants
// ------------------------------------
const RESET_GAME = 'RESET_GAME'
const START_GAME = 'START_GAME'
const TOGGLE_FAST_MODE = 'TOGGLE_FAST_MODE'
const TOGGLE_HARD_MODE = 'TOGGLE_HARD_MODE'
const TILE_PRESS = 'TILE_PRESS'
// ------------------------------------
// Actions
// ------------------------------------
export const resetGame = createAction(RESET_GAME)
export const startGame = createAction(START_GAME)
export const toggleFastMode = createAction(TOGGLE_FAST_MODE)
export const toggleHardMode = createAction(TOGGLE_HARD_MODE)
export const tilePress = createAction(TILE_PRESS, tile => tile)

export const actions = {
  resetGame,
  startGame,
  toggleFastMode,
  toggleHardMode,
  tilePress
}

const INITIAL_STATE = {
  playing: false,
  fastMode: true,
  hardMode: false
}
// ------------------------------------
// Action Handlers
// ------------------------------------

const ACTION_HANDLERS = {
  [START_GAME]: (state) => ({
    ...state,
    playing: true
  }),

  [RESET_GAME]: (state) => INITIAL_STATE,

  [TOGGLE_FAST_MODE]: (state) => ({
    ...state,
    fastMode: !state.fastMode
  }),

  [TOGGLE_HARD_MODE]: (state) => ({
    ...state,
    hardMode: !state.hardMode
  }),

  [TILE_PRESS]: (state, action) => ({
    ...state
  })
}
// ------------------------------------
// Reducer
// ------------------------------------

export default function mainReducer (state = INITIAL_STATE, action) {
  console.log(state, action)
  const handler = ACTION_HANDLERS[action.type]
  return handler ? handler(state, action) : state
}
