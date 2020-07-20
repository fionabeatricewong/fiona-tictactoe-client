'use strict'

// Require:
const api = require('./api')
const ui = require('./ui')
const gameApi = require('../game/api')
const getFormFields = require('../../../lib/get-form-fields')

// Event Handler Functions:
const onSignUp = function (event) {
  event.preventDefault()

  const form = event.target
  const formData = getFormFields(form)
  api.signUp(formData)
    .then(ui.signUpSuccess)
    .catch(ui.signUpFailure)
}

const onSignIn = function (event) {
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)

  api.signIn(formData)
    .then(ui.signInSuccess)
    .then(gameApi.createGame)
    .catch(ui.signInFailure)
}

const onSignOut = function (event) {
  event.preventDefault()

  api.signOut()
    .then(ui.signOutSuccess)
    .catch(ui.signOutFailure)
}

const onChangePassword = function (event) {
  event.preventDefault()

  const form = event.target
  const formData = getFormFields(form)

  api.changePassword(formData)
    .then(ui.changePasswordSuccess)
    .catch(ui.changePasswordFailure)
}

module.exports = {
  onSignUp,
  onSignIn,
  onSignOut,
  onChangePassword
}
