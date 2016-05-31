var Post = require('../../models/post')
var router = require('express').Router()

router.get('/api/posts', function (req, res, next) {
	Post.find().populate('user').populate('comments').exec(function (err, posts) {
		if (err) {return next(err)}
		res.json(posts)
	})
});

router.get('/api/posts/user/:userId', function (req, res, next) {
	Post.find({user: req.params.userId}).populate('user').exec(function (err, posts) {
		if (err) {return next(err)}
		res.json(posts)
	})
});

router.post('/api/posts', function (req, res, next) {
	var post = new Post({
		body: req.body.body
	})
	post.user = req.auth.id
	post.save(function (err, post) {
		if (err) { return next(err) }
		post.populate('user', function (err, post) {
			if (err) { return next(err) }
			res.json(201, post)
		})
	})
});

router.post('/api/posts/:postId', function (req, res, next) {
	Post.update({_id: req.params.postId}, req.body, function(err, post){
		if (err) { return next(err) }
		res.json(201, post)
	})
});

module.exports = router