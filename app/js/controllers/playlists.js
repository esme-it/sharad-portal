app.controller('PlaylistsCtrl', ['$scope', '$http',
  function ($scope, $http) {
    $http.get('data/mus-playlists.json').then(function(response) {
      $scope.playlists = response.data;
    });
  }]);