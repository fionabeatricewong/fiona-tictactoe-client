'use strict'

// Require:
const store = require('../store')

// Update the Screen Functions:

// Only show sign up and sign in upon loading page:
$('#authenticated').hide()
$('#unauthenticated').show()
//

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

  // Remove sign up and sign in options, show the rest:
  $('#authenticated').show()
  $('#unauthenticated').hide()
}
const signInFailure = function () {
  $('#message').text('Could not sign in! Try again!')
}

// Sign Out:
const signOutSuccess = function () {
  $('#message').text('Signed you out!')

  // Show only sign up and sign in again:
  $('#unauthenticated').show()
  $('#authenticated').hide()

  store.user = null
}
const signOutFailure = function () {
  $('#message').text('Still signed in!')
}

// Change Password:
const changePasswordSuccess = function () {
  $('#message').text('Password updated!')
}
const changePasswordFailure = function () {
  $('#message').text('Password has not changed!')
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  signOutSuccess,
  signOutFailure,
  changePasswordSuccess,
  changePasswordFailure
}
