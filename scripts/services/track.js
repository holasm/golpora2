angular.module('app')

.service('trackService', 
  ['trackListValue','$http','$rootScope',

  function(trackListValue, $http, $rootScope){
    var self = this;
    
    self.init_data = [];

    var urls = {
      'get:tracks' : '/tracks'
    };

    self.getTracks = function (cb){
      $http.get(urls['get:tracks']).then(function (res){
        // self.init_data = res.data;
        cb(res.data);
      }, function (){
        console.error('Sorry no track found');
      })
    }

  }//end function
]);