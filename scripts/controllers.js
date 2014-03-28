var app = angular.module('ngControllers', []);

app
.controller('MainCtrl', ['$scope', '$location', '$http',
    function($scope, $location, $http) {
        console.log('[C] Content');
    }
])
.controller('ContentCtrl', ['$scope', '$location', '$http',
    function($scope, $location, $http) {
        console.log('[C] Content');
    }
]);