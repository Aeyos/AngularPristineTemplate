angular.module('directives')
.directive('jsov', ['$compile', function ($compile) {
	return {
		restrict : 'E',
		templateUrl : 'app/js/directives/templates/jsov.html',
		scope : {
			obj: '='
		},
		link : function ($scope, $element) {
			console.dir($scope.obj);
			$scope.props = [];
			for(var i in $scope.obj) {
				$scope.props.push({
					name: i,
					value: $scope.obj[i],
					display: typeof $scope.obj[i] == 'object' ? '[ Object ]' : $scope.obj[i],
				});
			}
			$scope.expand = function (obj) {
				var index = $scope.props.indexOf(obj);
				for(var i in obj.value) {
					$scope.props.splice((++index), 0, {
						name: i,
						value: 0,
						display: obj[i],
					});
				}
			};
		}
	}
}])