angular.module('NerdCtrl', [])
	.controller('NerdController', function($scope, $http, Nerds) {

		$scope.formData = {};

		refreshData($scope, Nerds);

		// when submitting the add form, send the text to the node API
        $scope.createNerd = function() {
    		Nerds.create($scope.formData)
                .success(function(data) {
                        $scope.formData = {}; // clear the form so our user is ready to enter another
                        refreshData($scope, Nerds);
                });
        };

        // delete a nerd after checking it
        $scope.deleteNerd = function(id) {
            Nerds.delete(id)
                .success(function(data) {
                    refreshData($scope, Nerds);
                });
        };

        // update a nerd after checking it
        $scope.updateNerd = function(id) {
            Nerds.put(id, $scope.formData)
                .success(function(data) {
                		$scope.formData = {};
                        refreshData($scope, Nerds);
                });
        };

		$scope.tagline = 'Nothing beats a pocket protector!';

	});
function refreshData(scope, service){

	service.get()
		.success(function(data){
			scope.nerds = data;
		});

}