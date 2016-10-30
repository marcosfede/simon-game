import React from 'react'

import Dialog from 'material-ui/Dialog'
import FlatButton from 'material-ui/FlatButton'

const Popup = ({continuePlaying, resetAndStart, popupOpen}) => {
  const actions = [
    <FlatButton
      label='Reset Game'
      primary
      onTouchTap={resetAndStart}
      />,
    <FlatButton
      label='Continue Playing'
      primary
      keyboardFocused
      onTouchTap={continuePlaying}
      />
  ]

  return (
    <div>
      <Dialog
        title='You Won!'
        actions={actions}
        modal={true}
        open={popupOpen}
        onRequestClose={continuePlaying}
        >
        Do you want to continue playing or reset the game?
      </Dialog>
    </div>
    )
}

export default Popup
