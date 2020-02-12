'use strict';

// signup controller
app.controller('RegisterFormController', ['$scope', '$http', '$state', function($scope, $http, $state) {
    var config = {
                headers : {
                    'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8;'
                }
            }
var randomToken = function(length) {
    var token = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for(var i = 0; i < length; i++) {
        token += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return token;
}

 var token = randomToken(10)
  
   
    $scope.user = {};
    $scope.authError = null;
    $scope.register = function() {
	var data ={
             company: $scope.user.company,
             firstname: $scope.user.firstname,
	     surname: $scope.user.surname,
             email: $scope.user.email,
             password: $scope.user.password,
	     token: token
            };

      $scope.authError = null;
      // Try to create
      $http.post('/api/register',data, config)
      .then(function(response) {
        if ( !response.data.status ) {
          $scope.authError = response;
        }else{
          $state.go('access.login');
        }
      }, function(x) {
        $scope.authError = 'Server Error';
      });
    };
  }])
 ;
