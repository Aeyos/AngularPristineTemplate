angular.module('index').
config(function($routeProvider) {
	$routeProvider
		.when('/', {
			templateUrl : 'app/html/index.html',
			controller  : 'indexController',
			resolve : {
				asyncData : [function () {
				}],
			}
		})
}).
controller('indexController', ['$scope', 'asyncData', function ($scope, asyncData) {
	/* -- Controller variables -- */
	/* -- Scope variables -- */
	$scope.title = 'Index';
	$scope.core = $scope.$parent;
	$scope.index = asyncData;
	/* -- Controller functions -- */
	/* -- Controller -- */
}]);