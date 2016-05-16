angular.module('app')

.service('searchService', 
  ['searchResultValue','$rootScope',

  function(searchResultValue, $rootScope){
    var self = this;
    
    self.search = function (searchterm, cb){
      cb(searchResultValue);
    }
  }//end function
]);