angular.module('restApi', []).
	service('restApiService', ['$http', '$q', function ($http, $q) {
		return {
			path : '',
			config : function (opts) {
				if(!opts) console.error('restApi.js','config','options undefined, nothing to configure');
				if(opts.path) {
					this.path = opts.path;
				}
			},
			get : function (params) {
				if(!(this.path && this.path.length)) {
					console.error('restApi.js','get','invalid path');
					return {error:'invalid path'};
				}
				var deferred = $q.defer(),
					postParams = '';
				if(params) {
					postParams = '?';
					for(var i in params) {
						postParams += i + '=' + encodeURI(params[i]) + '&';
					}
					postParams = postParams.slice(0,-1);
				}
				console.log('Performing GET for post'+(postParams.length > 0?'with params : '+postParams:''));
				$http({
					method:'GET',
					url: this.path+postParams
				}).then(function success(response){
					console.log('GET for post : success', response);
					deferred.resolve(response);
				}, function fail(response){
					console.log('GET for post : error', response);
					deferred.reject(response);
				});

				return deferred.promise;
			}
		}
	}]);