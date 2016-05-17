angular.module('app')
.directive('gpTrackCards', ['trackListValue','audioService','audioUrlList','$rootScope',
 function(trackListValue, audioService, audioUrlList, $rootScope){
  // Runs during compile
  return {
    // name: '',
    // priority: 1,
    // terminal: true,
    // scope: {}, // {} = isolate, true = child, false/undefined = no change
    // controller: function($scope, $element, $attrs, $transclude) {},
    // require: 'ngModel', // Array = multiple requires, ? = optional, ^ = check parent elements
    // restrict: 'A', // E = Element, A = Attribute, C = Class, M = Comment
    // template: '',
    // replace: true,
    // transclude: true,
    // compile: function(tElement, tAttrs, function transclude(function(scope, cloneLinkingFn){ return function linking(scope, elm, attrs){}})),
    templateUrl: 'views/gp-track-cards.html',
    link: function($scope, iElm, iAttrs, controller) {
      var previousPlayIndex = -1;
      $scope.trackList = trackListValue;
      // console.log(trackListValue);

      $scope.initialize = function () {

        //when some track is already playing dont disturb it
        if (!audioService.playing && !(audioService.audio && audioService.audio.src)) {
            //Just provide a dummy audio element
            audioService.setUrl('');
        }

        //broadcast audio:info:set-image
        
      }

      var lock = 0;
      $scope.playPauseThisTrack = function($index) {

        var trackUrl = $scope.trackList[$index]['url'];

        //change track icon
        $scope.trackList[$index].playing = !$scope.trackList[$index].playing;

        //same track clicked
        if (trackUrl === audioService.playUrl){
          if(audioService.playing) {
            audioService.pause();
          }else{
            audioService.play();
          }
        }else{
          audioService.setUrl(trackUrl).play();
          // lock = 0;
        }
      }

      $scope.$watch(function(){
        if (audioService.audio && audioService.audio.canPlay) {
          var playable = (audioService.audio.audio.seekable.end(audioService.audio.audio.seekable.length - 1) / audioService.audio.duration);
          if(playable && !lock){
            // setTimeout(function (){
            //   lock = 1;
            //   audioService.play();
            //   $scope.log  = 'done'
            // },5000);
          }
        }
      })
      /*
      |--------------------------------------------------------------------------
      | Listen to play | pause broadcasts
      |--------------------------------------------------------------------------
      */

      //change 
      $rootScope.$on('audio:play', function (e, data) {
        if (data.url !== '') {
          angular.forEach($scope.trackList, function(val, index) {
            if (val.url == data.url) {
              val.playing = 1;
            }
          });
        }
      });

      $rootScope.$on('audio:paused', function (e, data) {
        if (data.url !== '') {
          angular.forEach($scope.trackList, function(val, index) {
            if (val.url == data.url) {
              val.playing = 0;
            }
          });
        }
      });

      
      $scope.initialize();
    }//end return


  };
}]);

// audioService.playUrl