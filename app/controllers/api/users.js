var router = require('express').Router()
var User = require('../../models/user')
var bcrypt = require('bcrypt')
var jwt = require('jwt-simple')
var config = require('../../config')

router.get('/api/users', function (req, res, next) {
	if (!req.headers['x-auth']) {
		return res.send(401)
	}
	var auth = jwt.decode(req.headers['x-auth'], config.secret)
	User.findOne({username: auth.username}, function (err, user) {
		if (err) {return next(err)}
		res.json(user)
	})
});

router.post('/api/users', function (req, res, next) {
	var user = new User({username: req.body.username})
	bcrypt.hash(req.body.password, 10, function (err, hash) {
		if (err) {return next(err)}
		user.password = hash
		user.save(function (err) {
			if (err) {return next(err)}
			res.send(201)
		})
	})
});

router.post('/api/users/:userId', function (req, res, next) {
	User.update({_id: req.params.userId}, req.body, function(err, user){
		if (err) { return next(err) }
		res.json(201, user)
	})
});

module.exports = router