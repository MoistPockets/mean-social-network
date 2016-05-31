var db = require('../db')
var Session = db.model('Session', {
	token: {type: String, required: true},
	expires: {type: Date, required: true, select: true}
})

module.exports = Session