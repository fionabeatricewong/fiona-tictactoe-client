// Require:
const config = require('../config')
const store = require('../store')

// AJAX Functions:
const createGame = function () {
  return $.ajax({
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    url: config.apiUrl + '/games',
    method: 'POST',
    data: {}
  })
}

module.exports = {
  createGame
}
