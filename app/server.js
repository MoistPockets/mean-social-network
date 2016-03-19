var express = require('express')
var bodyParser = require('body-parser')

var app = express()
app.use(bodyParser.json())
app.use(require('./auth'))
app.use(require('./controllers/api/posts'))
app.use(require('./controllers/static/static'))
app.use(require('./controllers/api/sessions'))
app.use(require('./controllers/api/users'))

app.listen(3000, function () {
	console.log('Server runs at', 3000)
})