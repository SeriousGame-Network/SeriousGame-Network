'use strict';


var app = angular.module('sgnApp', 
		[// 'ngRoute', 
		 'sgnApp.controllers', 
		 // 'sqnApp.dataService', 
		 'sgnApp.filters', 
		 'sgnApp.services', 
		 'sgnApp.directives']);

app.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/questions', {templateUrl: 'templates/questions.html', controller: QuestionsController});
  $routeProvider.when('/questions/:questionNo', {templateUrl:'templates/questions.html', controller:QuestionsController});

  $routeProvider.when('/results', {templateUrl:'templates/results.html', controller:ResultsController});

  $routeProvider.otherwise({redirectTo:'/questions'});
}]);

