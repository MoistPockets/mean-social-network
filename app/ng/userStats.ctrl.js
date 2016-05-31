angular.module('app').controller("LineCtrl", function ($scope, $routeParams, UserStatsSvc) {
	UserStatsSvc.getData($routeParams.id).success(function (result) {
		console.log(result)
		console.log(result.map(function(a) {return ''+a._id.year+'/'+a._id.month+'/'+a._id.day}))
		console.log(result.map(function(a) {return a.count}))
	
  $scope.labels = result.map(function(a) {return ''+a._id.year+'/'+a._id.month+'/'+a._id.day});
  $scope.series = ['Series A',];
  $scope.data = result.map(function(a) {return a.count});
  })
  $scope.onClick = function (points, evt) {
    console.log(points, evt);
  };
});
    