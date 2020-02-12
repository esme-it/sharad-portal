app.controller('ScreenCtrl', ['$scope','$http','$localStorage', '$timeout', function ($scope,$http,$localStorage,$timeout) {
	

	$scope.reload = function () {
    $http({url:"/api/getscreen",
    method: "GET",
    params:{client_id: $localStorage.client_id,screen_id: $localStorage.screen_id }
    }).then(function(response) {
	$scope.screendata = response.data; 
	})

	$http({url:"/api/getscreentags",
    method: "GET",
    params:{client_id: $localStorage.client_id,screen_id: $localStorage.screen_id }
    }).then(function(response) {
	$scope.screentags = response.data; 
	})

	$http({url:"/api/gettags",
    method: "GET",
    params:{client_id: $localStorage.client_id }
    }).then(function(response) {
	$scope.gettags = response.data; 
	})
	
    $timeout(function(){
        $scope.reload();
      },30000)
};
$scope.reload();undefined 

}]);