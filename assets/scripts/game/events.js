'use strict'

// Require:
const api = require('./api')
const ui = require('./ui')

// Event Handler Functions:
const onCreateGame = function (event) {
  event.preventDefault()

  api.createGame()
    .then(ui.createGameSuccess)
    .catch(ui.createGameFailure)
}

module.exports = {
  onCreateGame
}