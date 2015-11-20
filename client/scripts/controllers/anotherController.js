myApp.controller('AnotherController', ['$scope', '$http', function($scope, $http){
    //console.log("Another Controller");

    $scope.getOrders = function(){
        $http.get('/orders').then(function(response){
            $scope.orders = response.data;
            //console.log($scope.orders);
        });
    };

    $scope.getPeople = function(){
        $http.get('/people').then(function(response){
            $scope.people = response.data;
        });
    };

    $scope.getOrders();
    $scope.getPeople();

    $scope.filteredOrders = [];
    $scope.totalOrdersCost = 0;


    $scope.$watch('filteredOrders', function() {
        $scope.totalOrdersCost = 0;
            // /$scope.filteredOrders.push();
        for(var i=0; i<$scope.filteredOrders.length;i++) {
            //    $scope.filtered.push();
            //    console.log($scope.filteredOrders.length);
            $scope.totalOrdersCost += parseFloat($scope.filteredOrders[i].amount);
            console.log($scope.filteredOrders[i].amount);
        }
        return $scope.totalOrdersCost.toFixed(2);
    });

}]);
