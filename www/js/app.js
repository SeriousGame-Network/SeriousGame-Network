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


app.controller("QuestionsController2", function ($scope, sgnDataService) {

	$scope.msg = "msg---QuestionsController2";
	var data = sgnDataService.getData();
	$scope.questions = sgnDataService.getData().questions;


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


app.controller("HomeController", function ($scope) {
});


app.controller("DashboardController", function ($scope) {
});

app.controller("PlaySelectController", function ($scope) {
});

app.controller("QuizzSelectController", function ($scope) {
});

app.controller("QuizzPlayStartSelectController", function ($scope) {
});

app.controller("QuizzPlayEndController", function ($scope) {
});


app.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js

    // setup an abstract state for the tabs directive
  $stateProvider.state('tab', {
      url: "/tab",
      abstract: true,
      templateUrl: "templates/tabs.html"
    })

    // Each tab has its own nav history stack:

  $stateProvider.state('tab.home', {
      url: "/home",
      views: {
          'tab-home': {
            templateUrl: 'templates/tab-home.html',
            controller: 'HomeController'
          }    	  
      }
    });

    $stateProvider.state('tab.dashboard', {
      url: "/dashboard",
      views: {
          'tab-dashboard': {
            templateUrl: 'templates/tab-dashboard.html',
            controller: 'DashboardController'
          }    	  
      }
    });

    $stateProvider.state('tab.play.select', {
        url: "/playSelect",
        views: {
            'tab-play-select': {
              templateUrl: 'templates/tab-play-select.html',
              controller: 'PlaySelectController'
            }    	  
        }
      });

    $stateProvider.state('tab.quizz.select', {
        url: "/quizzSelect",
        views: {
            'tab-quizz-select': {
              templateUrl: 'templates/tab-quizz-select.html',
              controller: 'QuizzSelectController'
            }    	  
        }
      });

    $stateProvider.state('tab.quizz.play-start', {
        url: "/quizzPlayStart",
        views: {
            'tab-quizz-play-start': {
              templateUrl: 'templates/tab-quizz-play-start.html',
              controller: 'QuizzPlayStartController'
            }    	  
        }
      });

  $stateProvider.state('tab.questions', {
      url: '/questions',
      views: {
        'tab-questions': {
          templateUrl: 'templates/questions.html',
          controller: 'QuestionsController2' // 'TotoController' // 'QuestionsController'
        }
      }
    })

  $stateProvider.state('tab.quizz.play-end', {
        url: "/quizzPlayEnd",
        views: {
            'tab-quizz-play-end': {
              templateUrl: 'templates/tab-quizz-play-end.html',
              controller: 'QuizzPlayEndController'
            }    	  
        }
      });

    
  $stateProvider.state('tab.dash', {
      url: '/dash',
      views: {
        'tab-dash': {
          templateUrl: 'templates/tab-dash.html',
          controller: 'DashCtrl'
        }
      }
    });

    $stateProvider.state('tab.friends', {
      url: '/friends',
      views: {
        'tab-friends': {
          templateUrl: 'templates/tab-friends.html',
          controller: 'FriendsCtrl'
        }
      }
    });
  
  $stateProvider.state('tab.friend-detail', {
      url: '/friend/:friendId',
      views: {
        'tab-friends': {
          templateUrl: 'templates/friend-detail.html',
          controller: 'FriendDetailCtrl'
        }
      }
    })

    $stateProvider.state('tab.account', {
      url: '/account',
      views: {
        'tab-account': {
          templateUrl: 'templates/tab-account.html',
          controller: 'AccountCtrl'
        }
      }
    });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/tab/home');

});

