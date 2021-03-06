import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import injectTapEventPlugin from 'react-tap-event-plugin'
injectTapEventPlugin()

import './index.css'
import AppReducer from './reducers/AppReducer'
import Root from './containers/Root'

let store = createStore(AppReducer, composeWithDevTools(applyMiddleware(thunk)))

const muiTheme = getMuiTheme({
  palette: {
    accent1Color: '#01579B',
    primary1Color: '#55486E',
    textColor: '#424242'
  }
})

ReactDOM.render(
  <MuiThemeProvider muiTheme={muiTheme}>
    <Provider store={store}>
      <Root />
    </Provider>
  </MuiThemeProvider>,
  document.getElementById('root')
)
