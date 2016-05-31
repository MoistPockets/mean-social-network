var db = require('../db')
var ROLES = ['Administrator', 'RegularUser']
var User = db.model('User', {
	username: {type: String, required: true},
	description: {type: String, required: false},
	password: {type: String, required: true, select: false},
	role: {type: String, enum: ROLES, required: true, select: true},
})

module.exports = User