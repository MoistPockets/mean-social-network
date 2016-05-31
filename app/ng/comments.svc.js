angular.module('app').service('CommentsSvc', function($http) {
	this.create = function(comment) {
		return $http.post('/api/comments', comment)
	}
})