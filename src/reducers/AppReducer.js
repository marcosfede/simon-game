
const resetGame = () => (dispatch, getState) => {

}
const defaultstate = {
  fastMode: true,
  hardMode: false
}

export const actions = {
  resetGame
}

function mainReducer (state = defaultstate, diff) {
  console.log(state, diff)
  return state
}
export default mainReducer
