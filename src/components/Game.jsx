import React from 'react'
import { Card, CardText, CardActions } from 'material-ui/Card'
import FlatButton from 'material-ui/FlatButton'

import Controls from './Controls'
import TileBlock from './Tileblock'

const Game = ({
  fastMode, strictMode, handleStartButton, tilePress, resetGame,
   toggleFastMode, toggleStrictMode, highlightedTile, wrongMove, playAgain
}) => (
  <div id='content'>
    <Card id='card' zDepth={2}>
      <CardText>
        Simon Game {wrongMove && 'Wrong'}
      </CardText>
      <TileBlock
        tilePress={tilePress}
        highlightedTile={highlightedTile}
        />
      <Controls
        toggleFastMode={toggleFastMode}
        toggleStrictMode={toggleStrictMode}
        fastMode={fastMode}
        strictMode={strictMode}
      />
      <CardActions>
        <div id='fede'
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-around'}}>
          <FlatButton
            label={'Start'}
            onClick={handleStartButton} />
          <FlatButton
            label='Reset'
            onClick={resetGame} />
          <FlatButton
            label='Repeat'
            onClick={playAgain} />
        </div>
      </CardActions>
    </Card>
  </div>
)

export default Game
