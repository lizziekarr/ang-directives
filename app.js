(function(){

var app = angular.module('app', []);

app.directive('newspaperHeading', Heading)
   .directive('fashionArticle', Fashion)
   .directive('businessArticle', Business)
   .directive('foodArticle', Food);

app.controller('LikeController', LikeController);

LikeController.$inject = ['$scope'];
function LikeController($scope){
  $scope.foodLikes = 0;
  $scope.businessLikes = 0;
  $scope.fashionLikes = 0;
  $scope.addLike = function(type){
    if (type === 'food'){$scope.foodLikes++;}
    else if (type === 'business'){$scope.businessLikes++;}
    else if (type === 'fashion'){$scope.fashionLikes++;}
  };
}

/*LikeController.$inject = ['$scope'];
function LikeController($scope){


}*/

 function Heading(){
   return {
     template: '<h1>The Monday Times</h1>'
   }
 }

function Fashion(){
  return {
    restrict: 'E',
    templateUrl: 'fashion.html'
  }
}

function Business(){
  return {
    restrict: 'E',
    templateUrl: 'business.html'
  }
}

function Food(){
  return {
    restrict: 'E',
    templateUrl: 'food.html'
  }
}


})();
