var Users = require('../controllers/users')
var Polls = require('../controllers/polls')

module.exports = function(app){
	app.post('/users', Users.create),
	app.get('/polls', Polls.index),
	app.post('/polls', Polls.create),
	app.get('/users/:id', Users.show),
	app.get('/polls/:id', Polls.show),
	app.delete('/polls/:id', Polls.destroy)
	app.put('/polls/:id/votes', Polls.updateVotes)
} 