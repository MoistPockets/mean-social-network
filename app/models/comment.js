var db = require('../db')
var Comment = db.model('Comment', {
	user: {type: db.Schema.ObjectId, ref: 'User', required: true},
	date: {type: Date, required: true, default: Date.now},
	content: {type: String, required: true}
})

module.exports = Comment