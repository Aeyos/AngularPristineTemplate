angular.module('directives')
.directive('svgObject', function () {
	return {
		restrict : 'E',
		templateUrl : 'app/js/directives/templates/svgObject.html',
		scope : {
			src : '@',
			color : '@',
			id : '@'
		},
		link : function ($scope, $element) {
			$.get($scope.src, function(svg){
				window.svg = $scope.svgobj = svg.match(/<svg[\s\S]*svg>/g)[0];
				$scope.$apply();
			}, 'text');
			console.log($scope.src);
		}
	}
})