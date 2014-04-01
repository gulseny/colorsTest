angular.module('colorsTest', ['ngRoute'])
.config(['$routeProvider', function($routeProvider){
	$routeProvider
	.when('/', {
		templateUrl: '../views/play.html'
	})
	.otherwise('/gameOver', {
		template: '<div>Game Over!</div>'
	});
}])
.controller('playController', function($scope){
	$scope.person = {
		name: 'Gulsen'
	}

});

