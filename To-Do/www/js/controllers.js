angular.module('starter.controllers',[]).controller('ToDoListController',function($scope,$ionicModal,$log,$filter){
       	// array list which will contain the items added
       	console.log("starter controller has initialized");
$scope.toDoListItems = [
   			];

//init the modal
$ionicModal.fromTemplateUrl('modal.html', {
  scope: $scope,
  animation: 'slide-in-up'
}).then(function (modal) {
	console.log("ok");
  $scope.modal = modal;
});

// function to open the modal
$scope.openModal = function () {
	console.log("hello open modal get called");
	$log.info("open modal is called");
  $scope.modal.show();
};

// function to close the modal
$scope.closeModal = function () {
  $scope.modal.hide();
};

//Cleanup the modal when we're done with it!
$scope.$on('$destroy', function () {
  $scope.modal.remove();
});

//function to add items to the existing list
$scope.AddItem = function (data) {
	console.log("date selected is "+data.alarm);
	if (data.alarm==null) {
		data.alarm=new Date();
	};
	var dateString =$filter('date')(data.alarm, "dd/MM/yyyy");
  $scope.toDoListItems.push({
    task: data.newItem,
    alarm:dateString,
    status: 'not done'
  });
  data.newItem = '';
  data.alarm=''
  $scope.closeModal();
};

});
