var app = angular.module('personalApp', 
    [
        'ngRoute', 
        'ngAnimate', 
        'ui.bootstrap', 
    ])

app.config(function($routeProvider) {
    $routeProvider.when('/', {
        controller: 'HomeCtrl',
        templateUrl: 'templates/home.html',
    })

    $routeProvider.when('/resume', {
        controller: 'ResumeCtrl',
        templateUrl: 'templates/resume.html',
    })

    $routeProvider.when('/international', {
        controller: 'InternationalCtrl',
        templateUrl: 'templates/international.html',
    })

    $routeProvider.when('/fashion', {
        controller: 'FashionCtrl',
        templateUrl: 'templates/fashion.html',
    })
    $routeProvider.when('/writing', {
        controller: 'WritingCtrl',
        templateUrl: 'templates/writing.html',
    })

});