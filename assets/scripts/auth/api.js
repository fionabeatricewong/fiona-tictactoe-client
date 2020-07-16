// Require:

const config = require('../config')

// AJAX Functions:

const signUp = function (formData) {
  return $.ajax({
    url: config.apiUrl + '/sign-up',
    method: 'POST',
    data: formData
  })
}

module.exports = {
  signUp
}
