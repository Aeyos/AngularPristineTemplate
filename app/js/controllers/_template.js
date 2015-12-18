angular.module('_template', [])
.config(function($routeProvider) {
	$routeProvider
		.when('/_template', {
			templateUrl : 'app/html/_template.html',
			controller  : '_templateController',
			resolve : {
				asyncData : [function () {
				}],
			}
		})
}).
controller('_templateController', ['$scope', 'asyncData', function ($scope, asyncData) {
	/* -- Controller variables ----------------------------- */
	/* -- Scope variables ---------------------------------- */
	$scope.title = 'Template';
	$scope.core = $scope.$parent;
	//$scope.data = asyncData.data;
	/* -- Controller functions ----------------------------- */
	/* -- Scope functions ---------------------------------- */
	/* -- Controller run ----------------------------------- */
	/* -- Events ------------------------------------------- */
}]);