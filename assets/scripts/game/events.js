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
  console.log(index)
  event.preventDefault()

  api.updateGame(index, store.gameState.currentPlayer, store.gameState.over, store.gameState.id)
    .then(ui.updateGameSuccess)
    .catch(ui.updateGameFailure)
}

module.exports = {
  onCreateGame,
  makeMove,
}
