var router = require('express').Router()
var User = require('../../models/user')
var Session = require('../../models/session')
var bcrypt = require('bcrypt')
var jwt = require('jwt-simple')
var config = require('../../config')

router.post('/api/sessions', function (req, res, next) {
	User.findOne({username: req.body.username})
	.select('password').select('username')
	.exec(function  (err, user) {
		if (err) {return next(err)}
		if (!user) {return res.send(401)}
		bcrypt.compare(req.body.password, user.password, function (err, valid) {
			if (err) {return next(err)}
			if (!valid) {return res.send(401)}
			var token = jwt.encode({username: user.username, id: user._id, role: user.role, _id: user._id,}, config.secret)
			var session = new Session({token: token, expires: Date.now() + 1200000})
			session.save(function (err) {
				if (err) {return next(err)}
				res.send(token)
			})
		})
	})
});

module.exports = router