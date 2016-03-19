angular.module('app').controller('ApplicationCtrl', function ($scope) {
	$scope.$on('login', function (_, user) {
		console.log('Login event received')
		$scope.currentUser = user
	})
});