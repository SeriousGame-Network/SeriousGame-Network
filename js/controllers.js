
angular.module("sgnApp.controllers", [])
.controller(function($scope) {
	
	$scope.hello = "hello";
	$scope.totalScore = 0;
	
	$scope.questions = 
		[
	        {
	        	text : "Quels sont les modificateurs d'accès en Java ?",
	        	answers : 
	        		[
	        	    {
	        	    	text : "public, private",
	        	    	score : -1
	        	    },
	        	    {
	        	    	text : "public, private, protected",
	        	    	score : 0.5
	        	    },
	        	    {
	        	    	text : "public, private, protected, [default]",
	        	    	score : 1.0	
	        	    },
	        	    {
	        	    	text : "public, private, final",
	        	    	score : 0
	        	    },
	        	    {
	        	    	text : "public, private, friend",
	        	    	score : 0
	        	    }
	        	    ]
	        }
	    ];

	$scope.selectAnswer = function(ans) {
		alert("selected answer: " + ans.text);
		$scope.totalScore += ans.score;
	};
});