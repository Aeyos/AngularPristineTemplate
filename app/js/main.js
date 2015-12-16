/* -- Module declaration -- */
angular.module('core', []);
angular.module('index', []);

/* -- Module assembly -- */
angular.module('main', [
	'ngRoute',
	'core',
	'index'
]);