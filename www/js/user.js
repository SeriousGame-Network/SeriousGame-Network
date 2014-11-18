
angular.module("sqnApp.userDataService", [])
.service("userDataService", function () {

	var data = {
		currentUserName : "Ahmed Magri",
		currentUser : undefined,
		
		users : [
	     { // user 1
			 name : "Ahmed Magri",
			 
			 levels : [
					        { 
					        	tags : "dev java langage",
					        	level : 1
					        },
					        { 
					        	tags : "dev .net langage",
					        	level : 3
					        },
					        { 
					        	tags : "appli neo infra",
					        	level : 1
					        },
					        { 
					        	tags : "appli neo support",
					        	level : 1
					        },
					    ],
		     friends : [ 
		                 "Ahmed Magri", // self for demo...
		                 "Fabien Lequeurre", "Arnaud Nauwynck",
		                 ],
					    
			 pendingChallenges : [],
	
		     answeredQuizz : []
	     }, 
	     { // user 2
			 name : "Fabien Lequeurre",
			 
			 levels : [
					        { 
					        	tags : "dev java langage",
					        	level : 1
					        },
					        { 
					        	tags : "dev .net langage",
					        	level : 5
					        },
					        { 
					        	tags : "appli neo infra",
					        	level : 1
					        },
					        { 
					        	tags : "appli neo support",
					        	level : 1
					        },
					    ],
			 
		     friends : [ "Ahmed Magri", "Arnaud Nauwynck" ],
			 pendingChallenges : [],
	
		     answeredQuizz : []
	    	 
	     }
		]
	  };

		return {

			  getData : function() {
				  return data;
			  },
			  
			  getCurrentUser : function() {
				  if (data.currentUser === undefined) {
					  data.currentUser = this.getUserData(data.currentUserName);
				  }
				  return data.currentUser;
			  },
			  
			  getUserData : function(name) {
				  var res = undefined;
				  for(i = 0; i < data.users.length; i++) {
					  if (data.users[i].name === name) {
						  res = data.users[i];
						  break;
					  }
				  }
				  return res;
			  },
			  
			  sendChallenge : function(challenge) {
				  var user = this.getUserData(challenge.sendTo);
				  if (user != undefined) {
					  user.pendingChallenges.push(challenge);
				  }
				  // ?? writeDataToLocalStorage();
			  },
			  
			  writeDataToLocalStorage : function() {
				  console.log("writeStorage");
				  window.localStorage["sgn-userdata"] = $scope.userData;
			  },

			  readDataFromLocalStorage : function() {
				  console.log("readDataFromLocalStorage");
				  $scope.userData = window.localStorage["sgn-userdata"];
			  }
		};
});
