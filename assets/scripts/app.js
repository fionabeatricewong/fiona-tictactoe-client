'use strict'

// Require:
const authEvents = require('./auth/events')

$(() => {
  $('sign-up').on('submit', authEvents.onSignUp)
})
