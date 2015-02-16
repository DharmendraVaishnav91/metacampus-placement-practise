
userModule.controller("formValidationController",
	function($scope){
		$scope.saveUser=function(user,userForm){
			console.log(userForm);
			console.log("save user is get called");
			if(userForm.$valid){
				console.log("form data is valid");
			}else{
				console.log("form data is invalid");
			}
		};
	});

