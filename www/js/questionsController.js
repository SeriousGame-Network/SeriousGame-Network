
angular.module("sgnApp.questionsController", [])
.controller("QuestionsController", 
		function ($scope, $http, $routeParams, $location, $resultsService, sgnDataService) {

	$scope.questions = sgnDataService.data.questions;
	
		  $scope.questionNo = $routeParams && $routeParams.questionNo ? $routeParams.questionNo : 1;

// TODO		    $scope.questions = questions;

		  $scope.selectAnswer = function (question, choice) {
		    question.selected = choice;
		  };

		  $scope.viewResults = function () {
		    $resultsService.setResults($scope.questions);
		    $location.path( "/results" );
		  }

});