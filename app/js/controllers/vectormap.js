'use strict';


// jVectorMap controller
app.controller('JVectorMapDemoCtrl', ['$scope','$http','$localStorage','$timeout', function($scope,$http,$localStorage,$timeout)  {
   
  $scope.reload = function () {
      $http({url:"/api/getscrloc",
      method: "GET",
      params:{client_id: $localStorage.client_id}
      }).then(function(response) {
      $scope.world_markers= response.data;
   
      })
      
      $timeout(function(){
          $scope.reload();
        },30000)
      };
      $scope.reload();undefined 
  
 // $scope.world_markers = [{latLng: [48.187134, 16.402495], name: 'Wien'},{latLng: [44.187134, 15.402495], name: 'Franz'},{latLng: [42.187134, 17.402495], name: 'Linz'},{latLng: [50.187134, 13.402495], name: 'Peter'},{latLng: [42.187134, 26.402495], name: 'Jack'},{latLng: [40.187134, 10.402495], name: 'Tom'},{latLng: [48.187134, 16.402495], name: 'test'},{latLng: [48.187134, 16.402495], name: 'Grasbergergasse'}];
                          

}])
;