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
					expandable: typeof $scope.obj[i] == 'object',
					indent: '',
					indentCount: 0,
					hidden: false,
					explored: false
				});
			}
			$scope.expand = function (obj) {
				if(obj.expanded) {
					$scope.contract(obj);
					obj.expanded = false;
					return;
				}
				if(obj.explored) {
					var index = $scope.props.indexOf(obj),
						indent = obj.indent;
					for(var i=index+1 ; i<$scope.props.length ; i++) {
						if($scope.props[i].indentCount > obj.indentCount) {
							$scope.props[i].hidden = false;
						} else {
							break;
						}
					}
					obj.expanded = true;
					return;
				}
				var index = $scope.props.indexOf(obj);
				for(var i in obj.value) {
					if(obj.value[i] === obj) continue;
					$scope.props.splice((++index), 0, {
						name: i,
						value: obj.value[i],
						display: typeof obj.value[i] == 'object' ? '[ Object ]' : obj.value[i],
						expandable: typeof obj.value[i] == 'object',
						indent: obj.indent+'&nbsp;&nbsp;&nbsp;&nbsp;',
						indentCount: obj.indentCount+1,
						hidden: false,
						explored: false
					});
				}
				obj.expanded = true;
				obj.explored = true;
			};
			$scope.contract = function (obj) {
				var index = $scope.props.indexOf(obj),
					indent = obj.indent;
				for(var i=index+1 ; i<$scope.props.length ; i++) {
					if($scope.props[i].indentCount > obj.indentCount) {
						$scope.props[i].hidden = true;
					} else {
						break;
					}
				}
			};
			$scope.enumerate = function(i) {
				return new Array(i);
			}
		}
	}
}])