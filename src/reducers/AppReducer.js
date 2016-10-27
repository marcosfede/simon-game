import {createAction} from 'redux-actions'
// ------------------------------------
// Constants
// ------------------------------------
const NUMBER_OF_TILES = 4
const HL_TIME = 1000
const CLEAR_TIME = 200

const RESET_GAME = 'RESET_GAME'
const START_GAME = 'START_GAME'
const TOGGLE_FAST_MODE = 'TOGGLE_FAST_MODE'
const TOGGLE_HARD_MODE = 'TOGGLE_HARD_MODE'
const TILE_PRESS = 'TILE_PRESS'
const ADD_TILE = 'ADD_TILE'
const HIGHLIGHT_TILE = 'HIGHLIGHT_TILE'
const READY_FOR_INPUT = 'READY_FOR_INPUT'
const CLEAR_HIGHLIGHT = 'CLEAR_HIGHLIGHT'
// ------------------------------------
// Actions
// ------------------------------------
const resetGame = createAction(RESET_GAME)
const startGame = createAction(START_GAME)
const toggleFastMode = createAction(TOGGLE_FAST_MODE)
const toggleHardMode = createAction(TOGGLE_HARD_MODE)
const tilePress = createAction(TILE_PRESS, tile => tile)
const addTile = createAction(ADD_TILE)
const highlightTile = createAction(HIGHLIGHT_TILE, tile => tile)
const readyForInput = createAction(READY_FOR_INPUT, bool => bool)
const clearHighlight = createAction(CLEAR_HIGHLIGHT)
// ------------------------------------
// Thunk Actions
// ------------------------------------
const handleStartButton = () => (dispatch, getState) => {
  let { playing } = getState()
  if (!playing) {
    dispatch(startGame())
    dispatch(addTile())
    dispatch(playSequence())
  }
}
const playSequence = () => (dispatch, getState) => {
  let { sequence } = getState()
  let timeout = (time) => new Promise((resolve, reject) => {
    return setTimeout(resolve, time)
  })
  sequence.reduce((prev, curr, index) => {
    let tile = sequence[index]
    return prev.then(() => dispatch(highlightTile(tile)))
    .then(() => timeout(HL_TIME))
    .then(() => dispatch(clearHighlight(tile)))
    .then(() => timeout(CLEAR_TIME))
  }, Promise.resolve())
  .then(() => dispatch(readyForInput()))
}

/*  some other attempts to improve this async code. does not seem to work.
    I should submit an issue to thunk to ask about this.
const playSequence2 = () => (dispatch, getState) => {
  let { sequence } = getState()
  sequence.forEach(async (tile, index) => {
    dispatch(highlightTile(tile))
    await setTimeout(() => console.log('done waiting', index), 1000)
    dispatch(clearHighlight(tile))
    await setTimeout(() => console.log('done waiting v2', index), 500)
  })
}
const playSequence3 = () => async (dispatch, getState) => {
  let { sequence } = getState()
  for (let index = 0; index < sequence.length; index++) {
    let tile = sequence[index]
    dispatch(highlightTile(tile))
    await setTimeout(() => console.log('done waiting', index), 1000)
    dispatch(clearHighlight(tile))
    await setTimeout(() => console.log('done waiting v2', index), 500)
  }
}
*/

// Export external actions
export const actions = {
  resetGame,
  toggleFastMode,
  toggleHardMode,
  tilePress,
  handleStartButton
}
const INITIAL_STATE = {
  playing: false,
  fastMode: true,
  hardMode: false,
  sequence: [0, 1, 2, 3],
  readyForInput: false,
  highlighted: null
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
  }),

  [ADD_TILE]: (state) => ({
    ...state,
    sequence: state.sequence.concat(Math.floor(Math.random() * NUMBER_OF_TILES))
  }),

  [READY_FOR_INPUT]: (state, action) => ({
    ...state,
    readyForInput: action
  }),

  [CLEAR_HIGHLIGHT]: (state) => ({
    ...state,
    highlighted: null
  }),

  [HIGHLIGHT_TILE]: (state, tile) => ({
    ...state,
    highlighted: tile
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
