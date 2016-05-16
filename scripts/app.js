'use strict';

/**
 * @ngdoc overview
 * @name appApp
 * @description
 * # appApp
 *
 * Main module of the application.
 */
angular
  .module('app', [
    // 'ngCookies',
    'ngResource',
    'ui.router',
    // 'ngSanitize',
    'ngAudio'
  ])
  .config(function ($stateProvider, $urlRouterProvider) {
    
    $urlRouterProvider.otherwise('/');

    $stateProvider
      .state('main',{
        url: '/',
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .state('search',{
        url: '/search',
        templateUrl: 'views/search.html',
        controller: 'SearchCtrl',
        controllerAs: 'search'
      })
      .state('about',{
        url: '/about',
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .state('login',{
        url: '/admin/login',
        templateUrl: 'views/login.html',
        controller: 'LoginCtrl',
        controllerAs: 'login'
      })      
      .state('dashboard',{
        url: '/admin/dashboard/:username',
        templateUrl: 'views/dashboard.html',
        controller: 'DashboardCtrl',
        controllerAs: 'about'
      });
      // .otherwise({
      //   redirectTo: '/'
      // });
  })
  .value('playList', {})
  // .value('urlValue', 'http://sundaysuspense.in/128%20kbps/Sadashib%20er%20Hoi%20Hoi%20Kando.mp3')
  .value('urlValue', 'http://p3.music.126.net/K0QjoMvUWloi4Tiq40z28g==/528865129033079.mp3')
  .value('viewportValue',{xs: 768, sm: 768, md: 992, lg: 1200})
  .value('audioUrlList', {})
  .value('audioObjStore', {});
