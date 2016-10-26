import { connect } from 'react-redux'
import { actions } from '../reducers/AppReducer'

import App from '../components/App'

const mapStateToProps = (state) => {
  return ({
    fastMode: state.fastMode,
    hardMode: state.hardMode
  })
}

export default connect(mapStateToProps, actions)(App)
