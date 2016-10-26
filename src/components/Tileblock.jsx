import React from 'react'

import Tile from './Tile'

const sty = {
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
  width: '300px'
}

const TileBlock = () => (
  <div className='TileBlock' style={sty}>
    <Tile hoverColor='#db4437' color='#DF9390' />
    <Tile hoverColor='#4285f4' color='#97B7F2' />
    <Tile hoverColor='#0f9d58' color='#74C5A0' />
    <Tile hoverColor='#F4b400' color='#F0D562' />
  </div>
)

export default TileBlock
