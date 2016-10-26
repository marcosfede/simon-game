import React from 'react'
import FlatButton from 'material-ui/FlatButton'

const Tile = ({color, hoverColor}) => (
  <FlatButton label=' '
    style={{width: '150px', height: '150px', backgroundColor: color}}
    hoverColor={hoverColor}
     />
)

export default Tile
