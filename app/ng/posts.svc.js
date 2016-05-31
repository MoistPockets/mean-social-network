angular.module('app').service('PostsSvc', function($http) {
	this.fetch = function () {
		return $http.get('/api/posts')
	}
	this.getByUser = function (id) {
		return $http.get('/api/posts/user/'+id)
	}
	this.create = function(post) {
		return $http.post('/api/posts', post)
	}
	this.update = function(post) {
		return $http.post('/api/posts/' + post._id, post)
	}
})