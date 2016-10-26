import React from 'react'
import { Card, CardText, CardActions } from 'material-ui/Card'
import FlatButton from 'material-ui/FlatButton'

import Controls from './Controls'
import TileBlock from './Tileblock'

const Game = ({fastMode, hardMode}) => (
  <div id='content'>
    <Card id='card' zDepth={2}>
      <CardText>
        Simon Game
      </CardText>
      <TileBlock
        />
      <Controls
      />
      <CardActions>
        <FlatButton
          label={'Start'} />
        <FlatButton label='Reset' />
      </CardActions>
    </Card>
  </div>
)

export default Game
