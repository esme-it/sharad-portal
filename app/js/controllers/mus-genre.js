app.controller('MusicGenreCtrl', ['$scope','$http', 'filterFilter','$localStorage', '$timeout', function ($scope,$http, filterFilter,$localStorage,$timeout,) {
   
	$scope.reload = function () {
    $http({url:"/api/getscreens",
    method: "GET",
    params:{client_id: $localStorage.client_id}
    }).then(function(response) {
	$scope.items = response.data;
 
	})
	
    $timeout(function(){
        $scope.reload();
      },30000)
};

$scope.getitem = function (screen_id) {

		$localStorage.screen_id = screen_id;
		
};
$scope.reload();undefined 
 //   $scope.items = [
 //   ];

	// create empty search model (object) to trigger $watch on update
	$scope.search = {};
 
	$scope.resetFilters = function () {
		// needs to be a function or it won't trigger a $watch
		$scope.search = {};
	};

 
	// pagination controls
	$scope.currentPage = 1;
	$scope.totalItems = $scope.items.length;
	$scope.entryLimit = 40; // items per page
	$scope.noOfPages = Math.ceil($scope.totalItems / $scope.entryLimit);
 	
	// $watch search to update pagination
	$scope.$watch('search', function (newVal, oldVal) {
		$scope.filtered = filterFilter($scope.items, newVal);
		$scope.totalItems = $scope.filtered.length;
		$scope.noOfPages = Math.ceil($scope.totalItems / $scope.entryLimit);
		$scope.currentPage = 1;
	}, true);
}]);