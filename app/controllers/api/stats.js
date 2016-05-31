var Post = require('../../models/post')
var router = require('express').Router()
var mongoose = require('mongoose')

router.get('/api/stats/:userId', function (req, res, next) {
	Post.aggregate( [ 
	{ $match : { user : mongoose.Types.ObjectId(req.params.userId) } },
	{ $project:{_id: {year: { $year: "$date" },month: { $month: "$date" },day: { $dayOfMonth: "$date" }}}},
	{ $group: { _id: '$_id', count: { $sum: 1 } } }	
	] ).exec(function (err, posts) {
		if (err) {return next(err)}
		console.log(posts)
		res.json(posts)
	})
});


module.exports = router