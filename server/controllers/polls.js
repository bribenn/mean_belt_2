var mongoose = require('mongoose')

var Poll = mongoose.model('Poll')
var User = mongoose.model('User')

module.exports = {
	index:  function(request, response){
		Poll.find({}).populate({
			path: 'user',
			model: 'User'
		})
		.exec(function(err, polls){
			if(err){
				return response.json(error)
			}
			return response.json(polls)
		})
	},
	show: function(request, response){
		Poll.findById(request.params.id).populate('user')
		.exec(function(err, poll){
			if(err){
				return response.json(err);
			}
			if(!poll){
				return response.json({
					"errors": "404 - Poll not found!"
				})
			}
			return response.json(poll);
		})
	},
	create: function(request, response){
		Poll.create(request.body, function(err, poll){
			if(err){
				return response.json(err)
			}
			User.findByIdAndUpdate(request.body.user, {$push : {polls: poll._id}}, function(err, user){
				if(err){
					return response.json(err)
				}
					return response.json(poll)
				})
			})
	},
	destroy: function(request, response){
		Poll.findById(request.params.id, function(err, poll){
			if(err){
				return response.json(err);
			}
			poll.remove(function(err, poll){
				if(err){
					return response.json(err);
				}
				return response.json(poll);
			})
		})
	},
	updateVotes: function(request, response){
		Poll.findById(request.params.id, function(err, poll){
			console.log(request.body)
			if(err){
				return response.json(err)
			}
			poll[request.body.option].votes.count++;
			poll.save(function(err, poll){
				if(err){
					return response.json(err)
				}
				return response.json(poll) 	
			})
		})
	}
}