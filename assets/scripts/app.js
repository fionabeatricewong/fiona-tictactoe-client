'use strict'

// Require:
const authEvents = require('./auth/events')
const gameEvents = require('./game/events')

$(() => {
  // Authentication
  $('#sign-up').on('submit', authEvents.onSignUp)
  $('#sign-in').on('submit', authEvents.onSignIn)
  $('#sign-out').on('submit', authEvents.onSignOut)
  $('#change-password').on('submit', authEvents.onChangePassword)

  $('#create-game').on('submit', gameEvents.onCreateGame)

  for (let i = 0; i < 9; i++) {
    $(`#cell-${i}`).on('click', () => gameEvents.makeMove(i))
  }
})
