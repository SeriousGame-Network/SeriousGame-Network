// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
var app = angular.module('sgnApp', 
		[
        'ionic', 
        'starter.controllers', 'starter.services',
        
        'sgnApp.answerController',
        'sqnApp.dataService',
        'sgnApp.directives',
        'sgnApp.filters',
        'sgnApp.questionsController'        
        
        ])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

app.controller("TotoController", function($scope) {
	$scope.msg = "Hello";
});

app.service("sgnDataService2", function() {
	return {
		data : {

				questions : [
				        { // question 1
				        	name : "java access modifiers",
				        	tags : "dev java langage",
				        	level : 1,
				        	text : "Quels sont les modificateurs d'accès en Java ?",
				        	answers : 
				        		[
				        	    {
				        	    	text : "public, private",
				        	    	score : 0.0
				        	    },
				        	    {
				        	    	text : "public, private, protected",
				        	    	score : 0.0
				        	    },
				        	    {
				        	    	text : "public, private, protected, [default]",
				        	    	score : 1.0	
				        	    },
				        	    {
				        	    	text : "public, private, final",
				        	    	score : 0.0
				        	    },
				        	    {
				        	    	text : "public, private, friend",
				        	    	score : 0.0
				        	    }
				        	    ]
				        }
				    ] 
			  } // data
	}; // return
});

app.controller("QuestionsController2", function ($scope, sgnDataService2) {

	$scope.msg = "msg---QuestionsController2";
 	$scope.questions = sgnDataService2.data.questions;
//	$scope.questions = [
//	                    { text : "q1"}, 
//	                    { text: "q2"}
//	                    ];
		


		  /*
	$scope.questionNo = $routeParams && $routeParams.questionNo ? $routeParams.questionNo : 1;
// TODO		    $scope.questions = questions;
		  $scope.selectAnswer = function (question, choice) {
		    question.selected = choice;
		  };

		  $scope.viewResults = function () {
		    $resultsService.setResults($scope.questions);
		    $location.path( "/results" );
		  }
*/
});

app.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

    // setup an abstract state for the tabs directive
    .state('tab', {
      url: "/tab",
      abstract: true,
      templateUrl: "templates/tabs.html"
    })

    // Each tab has its own nav history stack:

    .state('tab.questions', {
      url: '/questions',
      views: {
        'tab-questions': {
          templateUrl: 'templates/questions.html',
          controller: 'QuestionsController2' // 'TotoController' // 'QuestionsController'
        }
      }
    })

    .state('tab.dash', {
      url: '/dash',
      views: {
        'tab-dash': {
          templateUrl: 'templates/tab-dash.html',
          controller: 'DashCtrl'
        }
      }
    })

    .state('tab.friends', {
      url: '/friends',
      views: {
        'tab-friends': {
          templateUrl: 'templates/tab-friends.html',
          controller: 'FriendsCtrl'
        }
      }
    })
    .state('tab.friend-detail', {
      url: '/friend/:friendId',
      views: {
        'tab-friends': {
          templateUrl: 'templates/friend-detail.html',
          controller: 'FriendDetailCtrl'
        }
      }
    })

    .state('tab.account', {
      url: '/account',
      views: {
        'tab-account': {
          templateUrl: 'templates/tab-account.html',
          controller: 'AccountCtrl'
        }
      }
    });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/tab/dash');

});

