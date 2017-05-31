app.factory('PollFactory', function($http, $cookies){
	var factory = {}

	factory.create = function(newPoll, callback){
		$http.post('/polls', newPoll).then(callback)
	},
	factory.index = function(callback){
		$http.get('/polls').then(callback)
	},
	factory.destroy = function(id, callback){
		$http.delete('/polls/' + id).then(callback);
	},
	factory.updateVotes = function(poll_id, option, callback){
		$http.put('/polls/' + poll_id + '/votes', option).then(callback);
	}
	factory.show = function(id, callback){
		$http.get('/polls/' + id).then(callback)
	}

	return factory
})