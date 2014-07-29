var app = angular.module("myApp", ["firebase"]);

app.controller("myCtrl", function($scope, $firebase){

  var fb = new Firebase("https://pinterestclone.firebaseio.com/");
  $scope.pins = [
    {
      name: "Knucklesandwich"
    },
    {
      name: "Old World Pale Ale"
    },
    {
      name: "Black Phoenix"
    },
    {
      name: "Palomino"
    },
    {
      name: "Red Rocket"
    }
  ];

});