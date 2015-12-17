angular.module('home', [])
.config(function($routeProvider) {
	$routeProvider
		.when('/', {
			templateUrl : 'app/html/home.html',
			controller  : 'homeController',
			resolve : {
				asyncData : [function () {
				}],
			}
		})
}).
controller('homeController', ['$scope', 'asyncData', function ($scope, asyncData) {
	/* -- Controller variables ----------------------------- */
	/* -- Scope variables ---------------------------------- */
	$scope.title = 'Home';
	$scope.core = $scope.$parent;
	//$scope.data = asyncData.data;
	/* -- Controller functions ----------------------------- */
	/* -- Scope functions ---------------------------------- */
	/* -- Controller run ----------------------------------- */
	/* -- Events ------------------------------------------- */
}]);