var router = require('express').Router()
var Comment = require('../../models/comment')
var Post = require('../../models/post')

router.get('/api/comments', function (req, res, next) {
	Comment.find().populate('user').exec(function (err, comments) {
		if (err) {return next(err)}
		res.json(comments)
	})
});

router.post('/api/comments', function (req, res, next) {
	var comment = new Comment({
		content: req.body.body
	})
	comment.user = req.auth._id
	console.log(comment)
	comment.save(function (err, comment) {
		if (err) { return next(err) }
		Post.findByIdAndUpdate(req.body.appendTo, {$push: {"comments": comment._id}}, {}, function(err, post) {
            if (err) { return next(err) }
			res.json(201, comment)
        });
	});
});

module.exports = router