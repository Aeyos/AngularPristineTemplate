angular.module('core').
controller('coreController', ['$scope', '$rootScope', '$location', function ($scope, $rootScope, $location) {
	/* -- Controller variables -- */
	/* -- Scope variables -- */
	$scope.appName = 'Pristine Template';
	/* -- Controller functions -- */
	/* -- Controller RUN -- */
	/* -- Controller Events -- */
	$rootScope.$on('$routeChangeSuccess', function (args) {
		$scope.path = $location.path().split('/')[1];
		$scope.breadCrumb = [{name:'Home',url:'#'}];
		var pathFragments = $location.path().match(/(\w+)/g),
			paths = '#/';
		for(var i in pathFragments) {
			paths += pathFragments[i] + '/';
			$scope.breadCrumb.push({name:pathFragments[i].capitalize(),url:paths});
		}
	});
}]);