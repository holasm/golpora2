'use strict';

/**
 * @ngdoc function
 * @name appApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the appApp
 */
angular.module('app')
  .controller('MainCtrl',
    ['trackService',
    'trackListValue',
    '$rootScope', 
    function (trackService, trackListValue, $rootScope) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    
    // trackService.getTracks(function (data){
    //   trackListValue = data;
    //   $rootScope.$broadcast('loaded:tracklist', data);
    //   window.data = trackListValue;
    // })
  }]);

