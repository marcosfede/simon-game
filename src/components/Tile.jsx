import React from 'react'
import FlatButton from 'material-ui/FlatButton'

const Tile = ({color, hoverColor, onClick}) => (
  <FlatButton label=' '
    style={{width: '150px', height: '150px', backgroundColor: color}}
    hoverColor={hoverColor} onClick={onClick}
     />
)

export default Tile
