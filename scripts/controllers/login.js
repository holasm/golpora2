'use strict';

/**
 * @ngdoc function
 * @name appApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the appApp
 */
angular.module('app')
.controller('LoginCtrl', ['$scope', '$location', function ($scope, $location) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.user = {};

    $scope.submit = function (user){
      var username = user.username;
      var password = user.password;
      if (username && password) {
        username = username.trim('');
        password = password.trim('');
     

      //verify login

      //redirect to dashboard
      $location.path( "/admin/dashboard/" + username );
      
      }else{
              console.error('Please fill the inputs');
      }
    };

  }
]);

