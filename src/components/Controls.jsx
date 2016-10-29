import React from 'react'
import { CardText } from 'material-ui/Card'
import Toggle from 'material-ui/Toggle'

const Controls = ({fastMode, strictMode, toggleFastMode, toggleStrictMode}) => (
  <CardText id='text'>
    <div className='controls'>
      <Toggle toggled={fastMode} onToggle={toggleFastMode} label='Fast Mode' />
      <Toggle toggled={strictMode} onToggle={toggleStrictMode} label='Strict Mode' />
    </div>
  </CardText>
)

export default Controls
