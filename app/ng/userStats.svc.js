angular.module('app').service('UserStatsSvc', function($http) {
	var svc = this
	svc.getData = function (id) {
		return $http.get('/api/stats/' + id)
	}
})