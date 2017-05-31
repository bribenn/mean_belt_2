var app = angular.module('app', ['ngRoute', 'ngCookies'])

app.config(function($routeProvider){
	$routeProvider
	.when('/', {
		templateUrl: 'partials/users_new.html',
		controller: 'UsersController as UC'
	})
	.when('/dashboard', {
		templateUrl: 'partials/dashboard.html',
		controller: 'PollsController as PC'
	})
	.when('/users/:id', {
		templateUrl: 'partials/user_show.html',
		controller: 'UsersController as UC'
	})
	.when('/polls', {
		templateUrl: 'partials/polls_new.html',
		controller: 'PollsController as PC'
	})
	.when('/polls/:id', {
		templateUrl: 'partials/poll_show.html',
		controller: 'PollsController as PC'
	})
	.otherwise({redirectTo: '/'})
})