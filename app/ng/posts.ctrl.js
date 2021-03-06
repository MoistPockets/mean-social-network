angular.module('app').controller('PostsCtrl', function ($scope, PostsSvc, CommentsSvc) {
	PostsSvc.fetch().success(function (posts) {
		$scope.posts = posts
	})
	$scope.addPost = function () {
		if ($scope.postBody && $scope.currentUser) {
			PostsSvc.create({
				body: $scope.postBody
			}).success(function (post) {
				$scope.posts.unshift(post)
				$scope.postBody = null
			})
		};
	};
	$scope.likePost = function (p) {
		if ($scope.currentUser) {
			p.likes.unshift($scope.currentUser._id)
			PostsSvc.update(p).success(function (post) {
				i = $scope.posts.map(function(x) {return x._id; }).indexOf(post._id);
				$scope.posts[i] = post
			})
		};
	};
	$scope.addComment = function (p) {
		CommentsSvc.create({
			body: p.comment,
			appendTo: p._id
		}).success(function (comment) {
			console.log(p)
			p.comments.unshift(comment)
		})
	};
});