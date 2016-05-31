var db = require('../db')

var Role = db.model('Role', {
	name: {type: String, enum: ROLES, required: true},
})

module.exports = Role