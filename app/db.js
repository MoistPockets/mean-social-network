var mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/social', function () {
	console.log('Nawiązano połączenie z mongodb.')
})

module.exports = mongoose