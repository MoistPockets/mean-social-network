var db = require('../db')
var Post = db.model('Post', {
	user: { type: db.Schema.ObjectId, ref: 'User', required: true },
	body: {type: String, required: true},
	likes: [{ type : String, required: false }],
	date: {type: Date, required: true, default: Date.now}
})

module.exports = Post