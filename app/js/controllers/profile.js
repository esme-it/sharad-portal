app.controller('ProfileCtrl', ['$scope', '$localStorage',
  function ($scope, $localStorage) {
  

   $scope.firstname = $localStorage.firstname;
   $scope.surname = $localStorage.surname;
   $scope.groupname = $localStorage.groupname;
 
  }]);
