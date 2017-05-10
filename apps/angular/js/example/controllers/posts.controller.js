app.controller('postsCtrl',
  ['$scope', 'myService', function($scope, myService) {

  console.log('postsCtrl');
  $scope.posts = myService.getPosts();

  $scope.title = 'Parent';
  $scope.url = 'http://parent.com';
  $scope.description = 'Parent';

  // $scope.$watch = function() {
  //   console.log('watch');
  // };
  
}]);