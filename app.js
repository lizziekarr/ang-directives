(function(){

var app = angular.module('app', []);

app.directive('newspaperHeading', Heading)
   .directive('fashionArticle', Fashion)
   .directive('businessArticle', Business)
   .directive('foodArticle', Food);

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
