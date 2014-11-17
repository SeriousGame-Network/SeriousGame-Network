
var app = angular.module("quizzApp", []);


app.controller('autoEvalController', ['$scope', function($scope) {
   $scope.level = {java: 4, sql: 3, dotnet : 1};
}]);