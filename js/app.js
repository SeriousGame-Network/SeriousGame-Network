'use strict';


var app = angular.module('sgnApp', 
		[ 'ngRoute', 
		 
		 'sgnApp.questionsController', 
		 'sgnApp.answerController', 
		 'sqnApp.dataService', 
		 'sgnApp.filters', 
		 'sgnApp.services', 
		 'sgnApp.directives'
		 ]);

app.controller("TestController", function() {
	
});

app.config(['$routeProvider', 
            function($routeProvider, QuestionsController, ResultController, AnswerController) {

  $routeProvider.when('/test', {
	  templateUrl: 'templates/test.html', 
	  controller: function() {
		  // TestController
	  }
	  });

  $routeProvider.when('/questions', {
	  templateUrl: 'templates/questions.html', 
	  controller: QuestionsController});

  $routeProvider.when('/questions/:questionNo', {
	  templateUrl:'templates/questions.html', 
	  controller:QuestionsController});

  $routeProvider.when('/results', {
	  templateUrl:'templates/results.html', 
	  controller:ResultController});

  $routeProvider.otherwise({redirectTo:'/questions'});
}]);

