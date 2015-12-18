angular.module('home', [])
.config(function($routeProvider) {
	$routeProvider
		.when('/', {
			templateUrl : 'app/html/home.html',
			controller  : 'homeController',
			resolve : {
				asyncData : ['restApiService', function ($rest) {
					$rest.config({path:'http://localhost/wp-json/wp/v2/posts'});
					// * If the route is not configured, it'll be set by default to an empty string
					// if a route has already been defined in another page scope, the path will be
					// the one set on that page, the service does not auto-reset the path on route
					// change... You can do this by setting the path on core.js > $onRouteChangeStart
					// and calling restApiService.config({path:''})
					// * If it's set but the url does not exist, an error will be thrown and the new
					// page will fail to load, and the user will stay in the current page with a
					// console error msg with more details, you can use this to debug...
					return $rest.get('per_page=10');
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
	console.log('Got this from the get : ', asyncData);
	/* -- Events ------------------------------------------- */
}]);