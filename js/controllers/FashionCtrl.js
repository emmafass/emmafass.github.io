angular.module('personalApp')

.controller('FashionCtrl', function($scope, $http, $location) {
	$scope.isHovering = false;
	$scope.hoverIn = function(){
		$scope.isHovering = true;
	}
	$scope.hoverOut = function(){
		$scope.isHovering = false;
	}
});