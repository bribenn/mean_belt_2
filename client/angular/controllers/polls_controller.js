app.controller('PollsController', function(UserFactory, PollFactory, $cookies, $location, $routeParams){
	console.log('initializing PollsController....')
	
	var self = this
	self.new_poll_errors = []
	self.polls = []
	self.newPoll = {}

	self.index = function(){
		PollFactory.index(function(response){
			self.polls = response.data
			console.log(self.polls)
		})
	},
	self.create = function(){
		self.new_poll_errors = []
		
		UserFactory.session(function(user){
			self.newPoll.user = user._id
			console.log(self.newPoll)
			PollFactory.create(self.newPoll, function(response){
					console.log(response)
					if(response.data.errors){
						for(key in response.data.errors){
							var error = response.data.errors[key]
							self.new_poll_errors.push(error.message)
						}
					}
					else {
						self.index()
						self.newPoll = {}
						$location.url('/dashboard')
					}
			})
		})
	},
	self.show = function(){
  		PollFactory.show($routeParams.id, function(response){
  			self.poll = response.data
  			console.log('show:' + self.poll)
  			return self.poll
  		})
  	},
	self.destroy = function(poll_id){
		PollFactory.destroy(poll_id, self.index)
	},
	self.updateVotes = function(option){
		console.log(option)
		PollFactory.updateVotes($routeParams.id, option, self.show)
	}
})

	// end of controllers function