angular.module('app').controller('RegisterCtrl', function ($scope, UserSvc) {
	$scope.register = function (user, pass) {
		UserSvc.register(user, pass).then(function (user) {
			console.log('User created')
		})
	};
});