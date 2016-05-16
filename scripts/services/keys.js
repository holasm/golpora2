angular.module('app')

.service('keysService', 
  [function(ngAudio, audioUrlList, audioObjStore, $rootScope){
    var self = this;


    var keys = {
      'space' : 32,
      'right' : 39,
      'left' : 37,
      'up' : 38,
      'down' : 40
    };

    self.on = function (key, e, cb){
      if (keys[key] === e.keyCode) {
       cb();
      }
    }

    $('html').bind('keydown', function(e){
      //if the key is present in keys object disable it
      if(e.keyCode == 32){
        return false;
      }else if(e.keyCode == 37){
        return false;
      }else if(e.keyCode == 38){
        return false;
      }else if(e.keyCode == 39){
        return false;
      }else if(e.keyCode == 40){
        return false;
      }
    });

  }//end function
]);