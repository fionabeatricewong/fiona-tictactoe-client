'use strict'

// Require:

// Update the Screen Functions:

// Sign Up:
const signUpSuccess = function () {
  $('message').text('Signed up!')
}
const signUpFailure = function () {
  $('message').text('Could not sign up! Try again!')
}

// Sign In:
const signInSuccess = function () {
  $('message').text('Signed in!')
}
const signInFailure = function () {
  $('message').text('Could not sign in! Try again!')



module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure
}
