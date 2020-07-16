'use strict'

// Require:

// Update the Screen Functions:

// Sign Up:
const signUpSuccess = function () {
  $('message').text('Signed up!')
}
const signUpFailure = function () {
  $('message').text('Try again!')
}

module.exports = {
  signUpSuccess,
  signUpFailure
}
