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
  updateBoard()
}

const createGameFailure = function () {
  $('#message').text('Game not started.')
}

const updateGameSuccess = function (response) {
  const currentPlayer = store.gameState.currentPlayer
  const nextPlayer = currentPlayer === 'x' ? 'o' : 'x'
  if (response.game.over) {
    $('#message').text(`${currentPlayer} won!`)
  } else {
    $('#message').text(`${currentPlayer} made a move. Your turn, ${nextPlayer}`)
  }
  store.gameState = {
    board: response.game.cells,
    over: response.game.over,
    id: response.game._id,
    currentPlayer: nextPlayer
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

const whoWon = function () {
  if ()
}

module.exports = {
  createGameSuccess,
  createGameFailure,
  updateGameSuccess,
  updateGameFailure
}
