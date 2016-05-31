angular.module('app').controller('UserProfileCtrl', function ($scope, $routeParams, UserSvc, PostsSvc) {
	UserSvc.find($routeParams.id).success(function (user) {
		$scope.user = user
	})
	PostsSvc.getByUser($routeParams.id).success(function (posts) {
		$scope.posts = posts
	})
});