
console.log("loading data.js");

angular.module("sqnApp.dataService", [])
.service("dataService", function ($scope, $localStorage) {

	$scope.data = {

		questions : [
		        { // question 1
		        	name = "java acces-modifiers"
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
<<<<<<< HEAD
		    ]; // $scope.data
	  
=======
		    ];

>>>>>>> 7eae47644573ba27ce1f8db7fca5e8a0d7211cbb
	  $scope.writeDataToLocalStorage = function() {
		  console.log("writeStorage");
		  window.localStorage["sgn-data"] = $scope.data;
	  };

	  
	  $scope.readDataFromLocalStorage = function() {
		  console.log("readDataFromLocalStorage");
		  $scope.data = window.localStorage["sgn-data"];
}// end .service function
);
