import React from 'react'

import './App.css'
import Topbar from './Topbar'
import Game from './Game'

const App = () => (
  <div id='App' className='App'>
    <Topbar
      href={'https://github.com/marcosfede/simon-game'}
      title={'Simon Game'}
        />
    <Game
        />
  </div>
)

export default App
