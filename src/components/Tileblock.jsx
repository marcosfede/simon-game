import React from 'react'

import Tile from './Tile'

const sty = {
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
  width: '300px'
}

const TileBlock = ({tilePress}) => (
  <div className='TileBlock' style={sty}>
    <Tile hoverColor='#db4437' color='#DF9390' onClick={() => tilePress(1)} />
    <Tile hoverColor='#4285f4' color='#97B7F2' onClick={() => tilePress(2)} />
    <Tile hoverColor='#0f9d58' color='#74C5A0' onClick={() => tilePress(3)} />
    <Tile hoverColor='#F4b400' color='#F0D562' onClick={() => tilePress(4)} />
  </div>
)

export default TileBlock
