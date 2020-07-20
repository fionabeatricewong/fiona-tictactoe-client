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
    over: response.game.over
  }
}

const createGameFailure = function () {
  $('#message').text('Game not started.')
}

module.exports = {
  createGameSuccess,
  createGameFailure
}
