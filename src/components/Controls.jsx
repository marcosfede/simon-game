import React from 'react'
import { CardText } from 'material-ui/Card'
import Toggle from 'material-ui/Toggle'

const Controls = (props) => (
  <CardText id='text'>
    <div className='controls'>
      <Toggle toggled onToggle={() => { console.log('toggle') }} label='Fast Mode' />
      <Toggle toggled onToggle={() => { console.log('toggle') }} label='Hard Mode' />
    </div>
  </CardText>
)

export default Controls
