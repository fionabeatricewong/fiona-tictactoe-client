'use strict'

// Require:
const store = require('../store')

$('#game-started').hide()

// Create Game:
const createGameSuccess = function (response) {
  $('#message').text('Game started.')

  $('#game-started').show()

  store.gameState = {
    board: response.game.cells,
    over: response.game.over,
    id: response.game._id,
    currentPlayer: 'x'
  }
}

const createGameFailure = function () {
  $('#message').text('Game not started.')
}

const updateGameSuccess = function (response) {
  $('#message').text(`${store.gameState.currentPlayer} made a move.`)

  store.gameState = {
    board: response.game.cells,
    over: response.game.over,
    id: response.game._id,
    currentPlayer: store.gameState.currentPlayer === 'x' ? 'o' : 'x'
  }
  updateBoard()
}

const updateBoard = function () {
  for (let i = 0; i < 9; i++) {
    $(`#cell-${i}`).text(store.gameState.board[i])
  }
}

const updateGameFailure = function (error) {
  $('#message').text(`Failed to make move. Error: ${error}`)
}

module.exports = {
  createGameSuccess,
  createGameFailure,
  updateGameSuccess,
  updateGameFailure
}
