angular.module('app').controller('UserAccountCtrl', function ($scope, UserSvc) {
	$scope.editAccount = function () {
		if ($scope.userName) {
			$scope.currentUser.username = $scope.userName
			UserSvc.edit($scope.currentUser).success(function (user) {
				$scope.userName = null
				$scope.currentUser = user
			})
		}
	}
});