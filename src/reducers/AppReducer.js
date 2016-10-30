import {createAction} from 'redux-actions'
import audio1 from '../sounds/simonSound1.mp3'
import audio2 from '../sounds/simonSound2.mp3'
import audio3 from '../sounds/simonSound3.mp3'
import audio4 from '../sounds/simonSound4.mp3'
const sounds = [audio1, audio2, audio3, audio4]
// ------------------------------------
// Constants
// ------------------------------------
const NUMBER_OF_TILES = 4
const WIN_MOVES = 20

const RESET_GAME = 'RESET_GAME'
const START_GAME = 'START_GAME'
const TOGGLE_FAST_MODE = 'TOGGLE_FAST_MODE'
const TOGGLE_STRICT_MODE = 'TOGGLE_STRICT_MODE'
const TILE_PRESS = 'TILE_PRESS'
const ADD_TILE = 'ADD_TILE'
const HIGHLIGHT_TILE = 'HIGHLIGHT_TILE'
const READY_FOR_INPUT = 'READY_FOR_INPUT'
const CLEAR_HIGHLIGHT = 'CLEAR_HIGHLIGHT'
const UPDATE_USER_SEQUENCE = 'UPDATE_USER_SEQUENCE'
const WRONG_MOVE = 'WRONG_MOVE'
// ------------------------------------
// Actions
// ------------------------------------
const resetGame = createAction(RESET_GAME)
const startGame = createAction(START_GAME)
const toggleFastMode = createAction(TOGGLE_FAST_MODE)
const toggleStrictMode = createAction(TOGGLE_STRICT_MODE)
const addTile = createAction(ADD_TILE)
const highlightTile = createAction(HIGHLIGHT_TILE, tile => tile)
const setReadyForInput = createAction(READY_FOR_INPUT, bool => bool)
const clearHighlight = createAction(CLEAR_HIGHLIGHT)
const updateUserSequence = createAction(UPDATE_USER_SEQUENCE, sequence => sequence)
const wrongMove = createAction(WRONG_MOVE)
// ------------------------------------
// Thunk Actions
// ------------------------------------
function handleStartButton () {
  return (dispatch, getState) => {
    let { playing } = getState()
    if (!playing) {
      dispatch(startGame())
      dispatch(addTile())
      dispatch(playSequence())
    }
  }
}
function playAgain () {
  return (dispatch, getState) => {
    dispatch(playSequence())
  }
}
function hightlightAndPlaySound (tile) {
  return (dispatch, getState) => {
    dispatch(highlightTile(tile))
    playSound(tile)
  }
}
function playSequence () {
  return async (dispatch, getState) => {
    let { sequence } = getState()
    for (let tile of sequence) {
      await highlightAndThenClear(dispatch, getState, tile)
    }
    dispatch(setReadyForInput(true))
  }
}
function tilePress (tile) {
  return (dispatch, getState) => {
    let { readyForInput, sequence, userSequence, strictMode } = getState()
    if (readyForInput) {
      highlightAndThenClear(dispatch, getState, tile)
      dispatch(wrongMove(false))
      let newUserSequence = [...userSequence, tile]
      if (newUserSequence.length < sequence.length) {
        if (arraysEqual(newUserSequence, sequence.slice(0, newUserSequence.length))) {
          dispatch(updateUserSequence(newUserSequence))
        } else { setWrongMove(dispatch, strictMode) }
      } else {
        if (arraysEqual(newUserSequence, sequence)) { correctMove(dispatch, getState) }
        else { setWrongMove(dispatch, strictMode) }
      }
    }
  }
}
// ------------------------------------
// Helper functions
// ------------------------------------
function playSound (tile) {
  let audio = new Audio(sounds[tile])
  audio.play()
}
async function highlightAndThenClear (dispatch, getState, tile) {
  let {hlTime, clTime} = getState()
  dispatch(hightlightAndPlaySound(tile))
  await timeout(hlTime)
  dispatch(clearHighlight(tile))
  await timeout(clTime)
}
async function correctMove (dispatch, getState) {
  let {sequence} = getState()
  dispatch(updateUserSequence([]))
  if (sequence.length !== WIN_MOVES) {
    dispatch(setReadyForInput(false))
    dispatch(addTile())
    await timeout(700)
    dispatch(playSequence())
  } else {
    wonGame()
  }
}
function wonGame () {
  
}
async function setWrongMove (dispatch, strictMode) {
  dispatch(wrongMove(true))
  dispatch(setReadyForInput(false))
  dispatch(updateUserSequence([]))
  if (strictMode) {
    dispatch(resetGame())
    dispatch(addTile())
  }
  await timeout(700)
  dispatch(playSequence())
}
function timeout (time) {
  return new Promise((resolve, reject) => {
    return setTimeout(resolve, time)
  })
}
function arraysEqual (a, b) {
  if (a === b) return true
  if (a == null || b == null) return false
  if (a.length !== b.length) return false
  for (var i = 0; i < a.length; ++i) {
    if (a[i] !== b[i]) return false
  }
  return true
}
// ------------------------------------
// Export external actions
// ------------------------------------
export const actions = {
  resetGame,
  toggleFastMode,
  toggleStrictMode,
  tilePress,
  handleStartButton,
  playAgain
}
const INITIAL_STATE = {
  playing: false,
  fastMode: false,
  strictMode: false,
  sequence: [],
  userSequence: [],
  readyForInput: false,
  highlightedTile: null,
  wrongMove: false,
  hlTime: 500,
  clTime: 100
}
// ------------------------------------
// Action Handlers
// ------------------------------------

const ACTION_HANDLERS = {
  [START_GAME]: (state) => ({
    ...state,
    playing: true
  }),

  [RESET_GAME]: (state) => ({
    ...INITIAL_STATE,
    fastMode: state.fastMode,
    strictMode: state.strictMode
  }),

  [TOGGLE_FAST_MODE]: (state) => {
    let {fastMode} = state
    return ({
      ...state,
      fastMode: !fastMode,
      hlTime: fastMode ? 500 : 150,
      clTime: fastMode ? 200 : 50
    })
  },

  [TOGGLE_STRICT_MODE]: (state) => ({
    ...state,
    strictMode: !state.strictMode
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
    readyForInput: action.payload
  }),

  [CLEAR_HIGHLIGHT]: (state) => ({
    ...state,
    highlightedTile: null
  }),

  [HIGHLIGHT_TILE]: (state, action) => ({
    ...state,
    highlightedTile: action.payload
  }),

  [UPDATE_USER_SEQUENCE]: (state, action) => ({
    ...state,
    userSequence: action.payload
  }),

  [READY_FOR_INPUT]: (state, action) => ({
    ...state,
    readyForInput: action.payload
  }),

  [WRONG_MOVE]: (state, action) => ({
    ...state,
    wrongMove: action.payload
  })
}
// ------------------------------------
// Reducer
// ------------------------------------

export default function mainReducer (state = INITIAL_STATE, action) {
  const handler = ACTION_HANDLERS[action.type]
  return handler ? handler(state, action) : state
}
