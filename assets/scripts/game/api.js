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

const updateGame = function (index, value, over, id) {
  return $.ajax({
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    url: config.apiUrl + '/games/' + id,
    method: 'PATCH',
    data: {
      game: {
        cell: {
          index,
          value
        },
        over
      }
    }
  })
}

module.exports = {
  createGame,
  updateGame
}
