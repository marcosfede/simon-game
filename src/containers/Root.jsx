import { connect } from 'react-redux'
import { actions } from '../reducers/AppReducer'

import App from '../components/App'

const mapStateToProps = (state) => {
  return ({
    ...state
  })
}

export default connect(mapStateToProps, actions)(App)
