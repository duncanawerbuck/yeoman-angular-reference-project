'use strict';

/**
 * @ngdoc overview
 * @name nodeCodelabApp
 * @description
 * # nodeCodelabApp
 *
 * Main module of the application.
 */
angular
  .module('nodeCodelabApp', [
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
