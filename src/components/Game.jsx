import React from 'react'
import { Card, CardText, CardActions } from 'material-ui/Card'
import FlatButton from 'material-ui/FlatButton'

import Controls from './Controls'
import TileBlock from './Tileblock'

const Game = ({fastMode, hardMode, startGame, tilePress,
    resetGame, toggleFastMode, toggleHardMode}) => (
  <div id='content'>
    <Card id='card' zDepth={2}>
      <CardText>
        Simon Game
      </CardText>
      <TileBlock
        tilePress={tilePress}
        />
      <Controls
        toggleFastMode={toggleFastMode}
        toggleHardMode={toggleHardMode}
        fastMode={fastMode}
        hardMode={hardMode}
      />
      <CardActions>
        <FlatButton
          label={'Start'}
          onClick={startGame} />
        <FlatButton
          label='Reset'
          onClick={resetGame} />
      </CardActions>
    </Card>
  </div>
)

export default Game
