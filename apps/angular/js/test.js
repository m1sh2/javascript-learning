var myApp = angular.module('myApp',[
  'appSrv'
]).service('appSrv', ['$scope', function($scope) {
  
}]);

myApp.controller('menuCtrl',
  ['$scope', '$rootScope', function($scope, $rootScope) {

  console.log('menuCtrl', $scope);
  $scope.menuItems = [];
}]);

myApp.controller('postsCtrl',
  ['$scope', 'appSrv', function($scope, appSrv) {

  console.log('postsCtrl', appSrv);
  $scope.posts = getPosts();

  $scope.title = 'Parent';
  $scope.url = 'http://parent.com';
  $scope.description = 'Parent';

  // $scope.$watch = function() {
  //   console.log('watch');
  // };
  
}]);

myApp.controller('postCtrl',
  ['$scope', '$rootScope', function($scope, $rootScope) {

  console.log('postCtrl', $scope);
  $scope.title = 'Child';
  $scope.url = 'http://child.com';
  $scope.description = 'Hello World! Hello World! Hello World! Hello World!';
  $scope.viewPost = viewPost;

  function viewPost(event) {
    console.log('viewPost', event);
    event.preventDefault();

    // $scope.$apply();
    return
  }
}]);