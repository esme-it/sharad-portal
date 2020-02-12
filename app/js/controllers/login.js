'use strict';

/* Controllers */
  // signin controller
app.controller('LoginFormController', ['$scope', '$http', '$state','$cookies','$localStorage', function($scope, $http, $state,$cookies,$localStorage) {
    $scope.user = {};
    $scope.add_cookie = false; 
    $scope.authError = null;
    $scope.token= null;
    if (!$scope.user.remember){
	$scope.user.remember=false;
	}
    $scope.login = function() {
      $scope.authError = null;
      // Try to login

      $http({url:"/api/checkcompany",
	method: "GET",
	params:{usercompany: $scope.user.company}
}).then(function(response) {
	$scope.status = response.data.status;
        if ($scope.status=="OK" ) {
	$scope.client_id = response.data.client_id;
	$http({url:"/api/auth",
        method: "GET",
        params:{usermail: $scope.user.email,userpw: $scope.user.password,remember: $scope.user.remember, client_id: $scope.client_id}
}).then(function(response) {
	$scope.status = response.data.status;
	 if ($scope.status=="OK" ){

	 var expireDate = new Date(); 
	expireDate.setDate(expireDate.getDate() + 1); 
	$cookies.put('firstname', $scope.firstname, {
  	expires: expireDate
	});
	$localStorage.client_id = $scope.client_id;
  $localStorage.username =  $scope.user.email;
  $http({url:"/api/userdata",
  method: "GET",
  params:{client_id: $localStorage.client_id}
}).then(function(response) {
  $scope.status = response.data.status;
        if ($scope.status=="OK" ) {
   $localStorage.firstname = response.data.firstname;
   $localStorage.surname = response.data.surname;
   $localStorage.groupname = response.data.groupname;
   $state.go('app.dashboard');      
  }});
        
	}
else{
 $scope.authError = $scope.status;
}	
	 },function(x) {
        $scope.authError = 'Server Error';
      }); }else{
	   $scope.authError = $scope.status;
        }
      }, function(x) {
        $scope.authError = 'Server Error';
      });
      
    };
  }])
;
