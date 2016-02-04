var app = angular.module('meanTeaApp', ['ngRoute']);

app.config(function($routeProvider, $locationProvider){
	$routeProvider.when('/', {
		templateUrl: './views/main.html',
		controller: 'MainController'
	}).when('/order',{
		templateUrl: 'views/order.html',
		controller: 'OrderController'
	}).when('/thankyou', {
		templateUrl: 'views/thankYou.html',
		controller: 'OrderControler'
	}).otherwise({
		redirectTo: '/'
	});

});
