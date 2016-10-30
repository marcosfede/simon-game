import React from 'react'

import Correct from 'material-ui/svg-icons/action/done'
import Wrong from 'material-ui/svg-icons/content/clear'

const sty = {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center'
}

const Indicator = ({wrongMove, sequenceLenght}) => (
  <span style={sty}>
    {wrongMove
    ? <Wrong />
  : <span style={sty}> {sequenceLenght > 0 && sequenceLenght-1} <Correct /></span>}
  </span>
)

export default Indicator
