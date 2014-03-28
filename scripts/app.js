'use strict';

/* App Module */
var app = angular.module('greenApp', [
    'ngRoute',
    'ngControllers',
    'ngAnimate',   
    'ngDirectives'
    // 'ngFilters',
]);

app.run(['$location', '$rootScope', '$timeout', function($location, $rootScope, $timeout) {
    $rootScope.$on('$routeChangeSuccess', function (event, current, previous) {
        // when change route, page always goes top (jquery attached)
        $(window).scrollTop(0);

        // metadata
        $rootScope.title = current.$$route.title;
        $rootScope.keywords = current.$$route.keywords;        
        $rootScope.description = current.$$route.description;

    });
}]);

app.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

    $routeProvider
	    .when('/', {
            templateUrl: 'views/main.html',
            controller: 'MainCtrl',
            title: 'Greenpeace | Main',
            keywords: 'Main',
            description: 'Main'
        })
        .when('/content', {
            templateUrl: 'views/content.html',
            controller: 'ContentCtrl',
            title: 'Greenpeace | Content',
            keywords: 'Content',
            description: 'Content'
        })
	    .otherwise({
        	redirectTo: '/'
        });
    }]);