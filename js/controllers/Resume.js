angular.module('personalApp')

.controller('ResumeCtrl', function($scope, $http, $location) {

    $scope.scroll = function(x){
    	console.log("clicked Scroll", x);
    	window.scrollTo(0, x);
    }


});