var mongoose = require('mongoose')
var User = mongoose.model('User')
var Poll = mongoose.model('Poll')

module.exports = {
	create: function(request, response){
		//Check if user already in database
		User.findOne({name: request.body.name}, function(err, user) {
			if (user) {
				return response.json(user)
			}
			else if (err) {
				return response.json(err)
			}
			else {
				//Name not in database, so create the user
				User.create(request.body, function(err, user) {
					if (err) {
						return response.json(err)
					}

					return response.json(user)
				})
			}

		})
	},
	index: function(request, response){
		User.find({}, function(err, users){
			if(err){
				return response.json(err)
			}
			return response.json(users)
		})
	},
	show: function(request, response){
		User.findById(request.params.id).populate('polls')
		.exec(function(err, user){
			if(err){
				return response.json(err);
			}
			if(!user){
				return response.json({
					"errors": "404 - User not found!"
				})
			}
			return response.json(user);
		})
	}
}