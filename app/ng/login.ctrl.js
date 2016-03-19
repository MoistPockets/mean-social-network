angular.module('app').controller('LoginCtrl', function ($scope, UserSvc) {
	$scope.login = function (user, pass) {
		UserSvc.login(user, pass).then(function (response) {
			$scope.$emit('login', response.data)
			console.log('Emmited login event')
		})
	};
});