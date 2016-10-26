import React from 'react'
import { CardText } from 'material-ui/Card'
import Toggle from 'material-ui/Toggle'

const Controls = ({fastMode, hardMode, toggleFastMode, toggleHardMode}) => (
  <CardText id='text'>
    <div className='controls'>
      <Toggle toggled={fastMode} onToggle={toggleFastMode} label='Fast Mode' />
      <Toggle toggled={hardMode} onToggle={toggleHardMode} label='Hard Mode' />
    </div>
  </CardText>
)

export default Controls
