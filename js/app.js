
var app = angular.module('myApp', [ 'ngStorage' ])  // 'ionic'

app.controller("myController", function ($scope, $localStorage) {
	  $scope.msg = "World";
	  $scope.stored1 = "";
	  $scope.sqldb = null;

	  $scope.questions = 
			[
		        {
		        	text : "Quels sont les modificateurs d'accès en Java ?",
		        	answers : 
		        		[
		        	    {
		        	    	text : "public, private",
		        	    	score : 0
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
	  
	  
	  $scope.createDb = function() {
		  console.log("createDb");
		  
		  var res = new window.SQL.Database();
		  
		  res.run("create TABLE Question if not exists (_id integer primary key autoincrement, question text not null);")

		  res.run("insert into Question (question) values ( 'test' );");
		  
		  data = res.exec("select * from Question");

		  return res;
	  };
	  	  
	  
	  $scope.addExclam = function() {
	    $scope.msg += "!";
	  };
	  
	  
	  $scope.readNGStorage = function() {
		  console.log("readNGStorage");
		  $scope.msg = $localStorage.stored1;
	  
	  };

	  $scope.writeNGStorage = function() {
		  console.log("writeNGStorage");
		  $localStorage.stored1 = $scope.msg;
	  };

	  $scope.readStorage = function() {
		  console.log("readStorage");
		  $scope.msg = window.localStorage["testjs.msg"];
	  
	  };

	  $scope.writeStorage = function() {
		  console.log("writeStorage");
		  window.localStorage["testjs.msg"] = $scope.msg;
	  };

	  
	  $scope.readSQLStorage = function() {
		  console.log("readSQLStorage");
		  if ($scope.sqldb  == null) {
			  $scope.createDb();
		  }
		  var data = $scope.sqldb.exec("select * from Question where _id = 1");
		  $scope.msg = data.values[0].question;
	  
	  };

	  $scope.writeSQLStorage = function() {
		  console.log("writeSQLStorage");
		  if ($scope.sqldb == null) {
			  $scope.createDb();
		  }
		  $scope.sqldb.run("update Question set question = '" + $scope.msg + "' where _id = 1");
	  };

	  // kripken.github.io
	  
	}
);