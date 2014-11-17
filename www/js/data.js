angular.module("sqnApp.dataService", [])
.factory("sgnDataService", function ($scope, $localStorage) {
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
		    ] // $scope.data
	  },

	  writeDataToLocalStorage : function() {
		  console.log("writeStorage");
		  window.localStorage["sgn-data"] = $scope.data;
	  },

	  readDataFromLocalStorage : function() {
		  console.log("readDataFromLocalStorage");
		  $scope.data = window.localStorage["sgn-data"];
	  }
	}; // return
});
