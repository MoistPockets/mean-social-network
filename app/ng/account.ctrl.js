angular.module('app').controller('UserAccountCtrl', function ($scope, UserSvc) {
	$scope.editAccount = function () {
		if ($scope.userName || $scope.userDesc) {
			$scope.currentUser.username = $scope.userName || $scope.currentUser.username
			$scope.currentUser.description = $scope.userDesc || $scope.currentUser.description
			UserSvc.edit($scope.currentUser).success(function (user) {
				$scope.userName = null
				$scope.currentUser = user
			})
		}
	}
});