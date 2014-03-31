var app = angular.module('ngControllers', []);

app
.controller('HomeCtrl',['$scope', '$location', '$http', 
	function($scope, $location, $http) {
        $scope.curYear = '2000';
        $scope.curDepth = '10';
        console.log($scope, '$$$');
    }
])
.controller('MainCtrl', ['$scope', '$location', '$http',
    function($scope, $location, $http) {
    }
])
.controller('ContentCtrl', ['$scope', '$location', '$http',
    function($scope, $location, $http) {
    }
]);