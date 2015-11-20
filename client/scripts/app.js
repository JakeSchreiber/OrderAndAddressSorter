var myApp = angular.module("myApp", ['ngRoute', 'ui.bootstrap', 'ngAria', 'ng-currency']);

myApp.config(['$routeProvider', function($routeProvider) {
    $routeProvider.
        when('/home', {
            templateUrl: "/assets/views/routes/home.html",
            controller: "SomeController"

        }).
        when('/addressdisplay', {
            templateUrl: "/assets/views/routes/addressdisplay.html",
            controller: "SomeController"
        }).
        when('/orderlookup', {
            templateUrl: "/assets/views/routes/orderlookup.html",
            controller: "AnotherController"
        }).
        otherwise({
            redirectTo: 'home'
        })
}]);

    myApp.filter('dateFilter', [function($filter) {
        return function(inputArray, startDate, endDate, order_date) {
            if (!angular.isDefined(startDate) || startDate === '') {
                return inputArray;
            }
            var data = [];
            angular.forEach(inputArray, function (item) {
                if ((item.order_date >= startDate) && (item.order_date <= endDate)){
                    //if (item.payee.name.toLowerCase().indexOf(searchCriteria.toLowerCase()) != -1) {
                        data.push(item);
                    //}
                }
            });
            return data;
        }}]);
