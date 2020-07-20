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

  // Game started
  $('#create-game').on('submit', gameEvents.onCreateGame)
})
