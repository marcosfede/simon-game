import React from 'react'
import { Card, CardText, CardActions } from 'material-ui/Card'
import FlatButton from 'material-ui/FlatButton'

import Controls from './Controls'
import TileBlock from './Tileblock'
import Indicator from './Indicator'

const sty = {
  header : {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  title: {
    margin: '0',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    fontSize: '1.1em'
  }
}

const Game = ({
  fastMode, strictMode, handleStartButton, tilePress, resetAndStart, sequence,
   toggleFastMode, toggleStrictMode, highlightedTile, wrongMove, playSequence
}) => (
  <div id='content'>
    <Card id='card' zDepth={2}>
      <CardText style={sty.header}>
        <p style={sty.title}>Simon Game </p>
        <Indicator wrongMove={wrongMove} sequenceLenght={sequence.length} />
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
            onClick={resetAndStart} />
          <FlatButton
            label='Repeat'
            onClick={playSequence} />
        </div>
      </CardActions>
    </Card>
  </div>
)

export default Game
