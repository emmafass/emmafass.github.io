angular.module('personalApp')

.controller('HomeCtrl', function($scope, $http, $location) {
	$scope.isOpen = false;

  $scope.scroll = function(x){
      console.log("clicked Scroll", x);
      window.scrollTo(0, x);
    }

	$scope.ham_click = function(){
		if($scope.isOpen == true){
			$scope.isOpen = false;
		}
		else{
			$scope.isOpen = true;
		}
  	}

    $scope.resume = function() {
      $location.path('/resume');
    }

  	$scope.inter = function() {
  		$location.path('/international');
  	}

  	$scope.fashion = function() {
  		$location.path('/fashion');
  	}

  	$scope.writing = function() {
  		$location.path('/writing');
  	}

});