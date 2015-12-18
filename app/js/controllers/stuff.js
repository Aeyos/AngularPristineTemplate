angular.module('stuff', [])
.config(function($routeProvider) {
	$routeProvider
		.when('/stuff', {
			templateUrl : 'app/html/stuff.html',
			controller  : 'stuffController',
			resolve : {
				asyncData : [function () {
				}],
			}
		})
}).
controller('stuffController', ['$scope', 'asyncData', function ($scope, asyncData) {
	/* -- Controller variables ----------------------------- */
	/* -- Scope variables ---------------------------------- */
	$scope.title = 'Stuff';
	$scope.core = $scope.$parent;
	//$scope.data = asyncData.data;
	/* -- Controller functions ----------------------------- */
	/* -- Scope functions ---------------------------------- */
	/* -- Controller run ----------------------------------- */
	/* -- Events ------------------------------------------- */
}]);