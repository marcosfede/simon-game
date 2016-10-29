import React from 'react'

import Tile from './Tile'

const sty = {
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
  width: '320px',
  colors: {
    strong: {
      0: '#db4437',
      1: '#4285f4',
      2: '#0f9d58',
      3: '#F4b400'
    },
    light: {
      0: '#DF9390',
      1: '#97B7F2',
      2: '#74C5A0',
      3: '#F0D562'
    }
  }
}
const TileBlock = ({tilePress, highlightedTile}) => {
  const getColor = (tile) => {
    return highlightedTile === tile ? sty.colors.strong[tile] : sty.colors.light[tile]
  }
  return (
    <div className='TileBlock' style={sty}>
      <Tile hoverColor={sty.colors.strong[0]} color={getColor(0)} onClick={() => tilePress(0)} />
      <Tile hoverColor={sty.colors.strong[1]} color={getColor(1)} onClick={() => tilePress(1)} />
      <Tile hoverColor={sty.colors.strong[2]} color={getColor(2)} onClick={() => tilePress(2)} />
      <Tile hoverColor={sty.colors.strong[3]} color={getColor(3)} onClick={() => tilePress(3)} />
    </div>
)
}
export default TileBlock
