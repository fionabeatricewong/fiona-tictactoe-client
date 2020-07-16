'use strict'

// Require:
const store = require('../store')

// Update the Screen Functions:

$('#authenticated').hide()
$('#unauthenticated').show()

// Sign Up:
const signUpSuccess = function () {
  $('#message').text('Signed up!')
}
const signUpFailure = function () {
  $('#message').text('Could not sign up! Try again!')
}

// Sign In:
const signInSuccess = function (response) {
  $('#message').text('Signed in!')

  store.user = response.user

  $('#authenticated').show()
  $('#unauthenticated').hide()
}
const signInFailure = function () {
  $('#message').text('Could not sign in! Try again!')
}

// Sign Out:
const signOutSuccess = function () {
  $('#message').text('Signed you out!')
  $('#unauthenticated').show()
  $('#authenticated').hide()

  store.user = null
}

const signOutFailure = function () {
  $('#message').text('Still signed in!')
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  signOutSuccess,
  signOutFailure
}
