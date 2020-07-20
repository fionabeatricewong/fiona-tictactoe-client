'use strict'

// Require:
const api = require('./api')
const ui = require('./ui')
const store = require('../store')

// Event Handler Functions:
const onCreateGame = function (event) {
  event.preventDefault()

  api.createGame()
    .then(ui.createGameSuccess)
    .catch(ui.createGameFailure)
}

const makeMove = function (index) {
  event.preventDefault()

  if (store.gameState.board[index] === '') {
    api.updateGame(index, store.gameState.currentPlayer, store.gameState.over, store.gameState.id)
      .then(ui.updateGameSuccess)
      .catch(ui.updateGameFailure)
  } else {
    ui.updateGameFailure('Space taken')
  }
}

module.exports = {
  onCreateGame,
  makeMove
}
