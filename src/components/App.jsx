import React from 'react'

import './App.css'
import Topbar from './Topbar'
import Game from './Game'
import Popup from './Popup'

const App = (props) => (
  <div id='App' className='App'>
    <Topbar
      href={'https://github.com/marcosfede/simon-game'}
      title={'Simon Game'}
    />
    <Game
      {...props}
    />
  <Popup
    {...props}
  />
  </div>
)

export default App
