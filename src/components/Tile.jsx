import React from 'react'
import FlatButton from 'material-ui/FlatButton'

const Tile = ({color, hoverColor, onClick}) => (
  <div label=' '
    style={{width: '160px', height: '160px', backgroundColor: color}}
    onClick={onClick}
     ></div>
)

export default Tile
