myApp.controller('SomeController', ['$scope', '$http', function($scope, $http){
    console.log("Some Controller");

    $scope.getAddresses = function(){
        $http.get('/addresses').then(function(response){
            $scope.addresses = response.data;
            console.log($scope.addresses);
        });
    };

    $scope.getAddresses();


    $scope.getPeople = function(){
        $http.get('/people').then(function(response){
            $scope.people = response.data;
            //console.log($scope.orders);
        });
    };

    $scope.getPeople();

}]);

//myApp.filter('duplicateName', function() {
//    return function(items, newName) {
//        var filtered = [];
//        angular.forEach(items, function(item) {
//            if(item.name != newName) {
//                filtered.push(item);
//            }
//        });
//        return filtered;
//    };
//});

//angular.module('ui.filters').filter('unique', function () {
//
//    return function (items, filterOn) {
//
//        if (filterOn === false) {
//            return items;
//        }
//
//        if ((filterOn || angular.isUndefined(filterOn)) && angular.isArray(items)) {
//            var hashCheck = {}, newItems = [];
//
//            var extractValueToCompare = function (item) {
//                if (angular.isObject(item) && angular.isString(filterOn)) {
//                    return item[filterOn];
//                } else {
//                    return item;
//                }
//            };
//
//            angular.forEach(items, function (item) {
//                var valueToCheck, isDuplicate = false;
//
//                for (var i = 0; i < newItems.length; i++) {
//                    if (angular.equals(extractValueToCompare(newItems[i]), extractValueToCompare(item))) {
//                        isDuplicate = true;
//                        break;
//                    }
//                }
//                if (!isDuplicate) {
//                    newItems.push(item);
//                }
//
//            });
//            items = newItems;
//        }
//        return items;
//    };
//});