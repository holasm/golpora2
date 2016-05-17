'use strict';
angular.module('app')
.directive('gpPlayer', 
[ '$window',
  'viewportValue',
  'audioService',
  'trackListValue',
   'keysService',
   '$rootScope',
  function($window, viewportValue, audioService, trackListValue, keysService, $rootScope){
  // Runs during compile

    return {
        // name: '',
        // priority: 1,
        // terminal: true,
        scope: {}, // {} = isolate, true = child, false/undefined = no change
        // controller: function($scope, $element, $attrs, $transclude) {},
        // require: 'ngModel', // Array = multiple requires, ? = optional, ^ = check parent elements
         // restrict: 'E', // E = Element, A = Attribute, C = Class, M = Comment
        // template: '',
        // templateUrl: '',
        // replace: true,
        // transclude: true,
        // compile: function(tElement, tAttrs, function transclude(function(scope, cloneLinkingFn){ return function linking(scope, elm, attrs){}})),
        templateUrl: 'views/gp-player.html',
        link: function($scope, iElm, iAttrs, controller) {

          window.el = {};
          var maxProgressWidth = 0,
              maxVolumeWidth = 0,
              setWidth = 0,
              loaded = 0,
              durationInSeconds = 0;

          // el.progressBarWrapper = iElm.find('.progress-bar-wrapper');
          el.progressBarBackground = angular.element($('.progress-bar-background'));
          el.currentDuration = angular.element($('.current-duration'));
          el.volBarBackground = angular.element($('.vol-bar-background'));
          // el.barHover = iElm.find('controls');
          // el.progressBarOn = iElm.find('.progress-bar-on');
          el.loadedDuration = angular.element($('.loaded-duration'));
          // el.progressBarChange = iElm.find('.progress-bar-change');
          // el.trackLikeInPlayer = angular.element($('.like > .icon-hover-boundary'));
          el.currentVolume = angular.element($('.current-volume'));
          // el.pointer = iElm.find('.pointer');
          el.changeDurationOnhover_1 = angular.element($('.progress-bar-background > div.change-duration-onhover-1'));
          el.changeDurationOnhover_2 = angular.element($('.progress-bar-background > div.change-duration-onhover-2'));
          el.progressPointer = angular.element($('.current-duration > .pointer'));
          el.play = angular.element($('div .play .icon-hover-boundary'));
          el.pause = angular.element($(".pause  .icon-hover-boundary"));
          el.next = angular.element(('div.next  .icon-hover-boundary'));

          el.changeVolOnhover_1 = angular.element($('.vol-bar-background > div.change-duration-onhover-1'));
          el.changeVolOnhover_2 = angular.element($('.vol-bar-background > div.change-duration-onhover-2'));
          el.volumePointer = angular.element($('.current-volume > .pointer')); 
          el.cardTitles = $('.card-title'); 

          el.trackImage = angular.element($('.track-info > .track-image')); 
          el.trackTitle = angular.element($('.track-details > .track-title')); 
          el.trackAuthor = angular.element($('.track-details > .track-author')); 

          $scope.progressInTime = '00:00';
          $scope.duration = '00:00';
          $scope.playing = 0;
          $scope.playable = 0;
          $scope.audio = {};
          $scope.progressHeight = 4;
          $scope.volumeBarHeight = 4;
          $scope.volume = {
            low: 1,
            high: 0,
            mute: 0,
            preMuteVolume: 0.5
          };
          $scope.track = {}

          $scope.$watch(function() {

            if (audioService.audio) {
              if (audioService.audio !== $scope.audio) {
                $scope.audio = audioService.audio;
              }
              if ($scope.audio.canPlay) {

                //show how much of the audio part loaded
                $scope.playable = 100 * 
                                  ($scope.audio.audio.seekable.end($scope.audio.audio.seekable.length - 1) / $scope.audio.duration);
                el.loadedDuration.css({
                  width: $scope.playable +'%'
                });
                // console.log($scope.audio.audio.buffered.end(0));

              }

              if ($scope.playing ) {
                $scope.updateProgress();
              }

              //update only when data changed in back
              if (durationInSeconds !== $scope.audio.duration) {

                durationInSeconds = $scope.audio.duration;
                if (!isNaN(durationInSeconds)) {
                  $scope.duration = formatTime($scope.audio.duration);
                }
              }

              //
              if (!isNaN($scope.audio.currentTime)) {
                $scope.progressInTime = formatTime($scope.audio.currentTime);
              }

              //connect playing state
              if($scope.playing !== audioService.playing){
                $scope.playing = audioService.playing;
              }

            }//if audio exists
          })//end $scope.$watch

          $scope.setTrackInfo = function (id){
            if(!id){
              id = 0;
            }
            $scope.track = trackListValue[id];
          }
          $scope.setTrackInfo();
          
          function formatTime(time) {
            var totalSeconds = Math.round(time);
            var hours = Math.floor(totalSeconds / (60*60));
            var minutes = Math.floor( (totalSeconds - hours * 60*60) / 60);
            var seconds = (totalSeconds - hours * 60*60) - (minutes * 60);
            
            if (hours < 10) {
              hours = '0' + hours;
            }

            if (minutes < 10) {
              minutes = '0' + minutes;
            }

            if ((seconds) < 10) {
              seconds = '0'+ seconds; 
            }

            if (hours === '00') {
              return (minutes +':'+ seconds);
            }else{
              return (hours +':'+ minutes +':'+ seconds);
            }

          }

          var tempProgress;
          // //update the 
          $scope.updateProgress = function(progress) {
              if (!progress) {
                progress = $scope.audio.progress;
              }

              if (typeof(progress) === 'number') {
                el.currentDuration.css({
                  width:  (progress * 100) +'%'
                });
              }

              tempProgress = progress * 100;
              tempProgress = Math.round(tempProgress);


              if ( tempProgress === 100 ) {
                audioService.pause();
              }

          }


          // //initialize
          // var width = $window.innerWidth;
          // var marginLeft = el.progressBarBackground.css('margin-left');

          // setWidth = el.progressBarWrapper.width() - el.currentProgress.width() - el.maxProgress.width();
          // el.progressBarBackground.css({
          //   width: setWidth +'px',
          // });

          maxProgressWidth = el.progressBarBackground.width();
          maxVolumeWidth = el.volBarBackground.width();

          // var initialHeight = el.progressBarOnHover.height();
          // el.barHover.bind('mouseover', function(e) {
          //   e.preventDefault();
          //   el.progressBarOnHover.css({
          //     'height': '5px'
          //   });
          // });


          // el.barHover.bind('mouseout', function(e){
          //   e.preventDefault();
          //   el.progressBarOnHover.css({
          //     'height': initialHeight+ 'px'
          //   });
 
          //   el.progressBarChange.width(0);
          // });

          /**
          / Presets
          /
          /
          */
          el.volumePointer.bind('click', function(e){
            e.preventDefault();
            e.stopPropagation();
          });
          el.progressPointer.bind('click', function(e){
            e.preventDefault();
            e.stopPropagation();
          });



          //called on mousemove
          //show track change hint
          $scope.showTrackChangeHint = function ($event) {
            $event.preventDefault();
            $event.stopPropagation();

            $scope.progressHeight = 5;
            var progressInPx = $event.offsetX;
            if (el.currentDuration.width() < progressInPx) {
              el.changeDurationOnhover_1.width(0);
              el.changeDurationOnhover_2.width(progressInPx);
            }else{
              if (progressInPx > (el.currentDuration.width() - el.progressPointer.width()/2)) {
                el.changeDurationOnhover_1.width(progressInPx - el.progressPointer.width()/2);
              }else{
                el.changeDurationOnhover_1.width(progressInPx);
              }
              el.changeDurationOnhover_2.width(0);
              el.changeDurationOnhover_1.css({
                'background': '#12DA90'
              });
              el.currentDuration.css({
                'background': 'rgba(57, 222, 161, 0.72)'
              });
            }

          }

          //show track change hint
          $scope.hideTrackChangeHint = function () {
            $scope.progressHeight = 4;
            el.changeDurationOnhover_2.width(0);
            el.changeDurationOnhover_1.width(0);
          }

                    //
          $scope.changeCurTrackDuration = function(e){
            e.preventDefault();
            var mouseX = e.offsetX;
              var parentWidth = $(e.target).parent().width();

            //calculate % progress
            var  progressInPercent = (mouseX / parentWidth);

            //if audio exits and playable
            if (audioService.audio && audioService.audio.canPlay) {
              // var setCurrentTime = progressInPercent * audioService.audio.duration;//in seconds
              $scope.setTrackDuration(progressInPercent);
              $scope.seeked++;
            };
          }

          $scope.setTrackDuration = function (progressInDecimal){
            audioService.audio.setProgress(progressInDecimal);
            el.changeDurationOnhover_1.width(0);
            $scope.updateProgress(progressInDecimal);
          }


          //called on mousemove
          //show track change hint
          $scope.showVolChangeHint = function ($event) {
            $scope.volumeBarHeight = 5;

            var progressInPx = $event.offsetX;
            if (el.currentVolume.width() < progressInPx) {
              el.changeVolOnhover_1.width(0);
              el.changeVolOnhover_2.width(progressInPx);
            }else{
              if (progressInPx > (el.currentVolume.width() - el.volumePointer.width()/2)) {
                el.changeVolOnhover_1.width(progressInPx - el.volumePointer.width()/2);
              }else{
                el.changeVolOnhover_1.width(progressInPx);
              }

              el.changeVolOnhover_2.width(0);
              el.changeVolOnhover_1.css({
                'background': '#12DA90'
              });
              el.currentVolume.css({
                'background': 'rgba(57, 222, 161, 0.72)'
              });
            }
          }

          //show track change hint
          $scope.hideVolChangeHint = function () {
            $scope.volumeBarHeight = 4;
            el.changeVolOnhover_1.width(0);
            el.changeVolOnhover_2.width(0);
          }

          $scope.changeVolume = function(e) {
            e.preventDefault();
            var mouseX = e.offsetX;

            //calculate % progress
            var volumeInPercent = (mouseX / maxVolumeWidth);

            //if audio exits and playable
            if (audioService.audio) {
              // var setCurrentTime = progressInPercent * audioService.audio.duration;//in seconds
              volumeInPercent = Math.round(volumeInPercent * 100)/100;
              $scope.setVolume(volumeInPercent);
            }; 
          }

          $scope.setVolume = function (volumeInDecimal){
            audioService.audio.setVolume(volumeInDecimal);
            audioService.volume = volumeInDecimal;
            //update vol icon
            $scope.updateVolumeIcon(volumeInDecimal);

            el.currentVolume.width(volumeInDecimal * 100);
            //reset vol change hint width
            el.changeVolOnhover_1.width(0);
          }

          $scope.muteToggle = function() {
            if ($scope.volume.mute === 0) {
              $scope.volume.preMuteVolume = audioService.audio.volume;
              audioService.audio.setVolume(0.00001);
              audioService.setVolume(0.00001);
            }else{
              audioService.audio.setVolume($scope.volume.preMuteVolume);
              audioService.setVolume($scope.volume.preMuteVolume);
            }
          }

          $scope.updateVolumeIcon = function(volumeInPercent) {
            $scope.volume.low = 0;
            $scope.volume.high = 0;
            $scope.volume.mute = 0;
            // var volumeInPercent = audioService.audio.volume;
            if(volumeInPercent <= 0.001){
              $scope.volume.mute = 1;
            }else if (volumeInPercent <= 0.5) {
              $scope.volume.low = 1;
            }else if(volumeInPercent > 0.5){
              $scope.volume.high = 1;
            } 

          }

          //listen to audioService setVolume call
          $rootScope.$on('audio:volume', function(event, data) {
            $scope.updateVolumeIcon(data.vol);
          })

          $rootScope.$on('audio:change:track', function(event, data) {
            el.currentDuration.css({
                  width: 0 +'%'
                });
            el.loadedDuration.css({
                  width: 0 +'%'
                });

            audioService.search(trackListValue, function (id){
              $scope.setTrackInfo(id);
            });
          })

          $scope.like = function() {
            console.log('+1 like');
          }

          $scope.log = '';
          // //Event listeners for player controls
          $scope.playPause =  function() {
            if (audioService.playing) {
              audioService.pause();
            }else{

              //when audio element is a dummy
              if (audioService.playUrl === '') {
                console.log(123);
                audioService.setUrl(trackListValue[0].url);
              }

              //when track is played fully
              if ( 100 * audioService.audio.progress > 99 ) {
                $scope.setTrackDuration(0.001);

                //due to asyncronus nature of the setTrackDuration 
                //call .play() little later
                setTimeout(function name(){
                  audioService.play();
                },300);

              }else{ //track is still remaining and in paused state
                audioService.play();
              }
              $scope.log = 'done-from-playPause';
            }
          }; 

          // //Event listeners for player controls
          $scope.next =  function() {

            if (audioService.playing) {
              audioService.pause();
            }

            //find the current track position
            audioService.search(trackListValue, function (id){
              if( trackListValue[++id] ){
                audioService.setUrl( (trackListValue[id]).url ).play();
              }else{
                id = 0;
                audioService.setUrl( trackListValue[id].url ).play();
              }
            })
            //now play the next track
          };

          // //Event listeners for player controls
          $scope.previous =  function() {
            if (audioService.playing) {
              audioService.pause();
            }

            //find the current track position
            audioService.search(trackListValue, function (id){
              if( trackListValue[--id] ){
                audioService.setUrl( (trackListValue[id]).url ).play();
              }else{
                id = trackListValue.length - 1;
                audioService.setUrl( trackListValue[id].url ).play();
              }
            })
            //now play the next track
          };

          

          //update track info
          $rootScope.$on('audio:play', function(event , data) {
            angular.forEach(trackListValue, function(val, index) {

              if (val.url == data.url) {
                
                //update image
                if (val.img) {
                  el.trackImage.css({
                    'background': 'url('+ val.img +') center / cover'
                  });
                }else{
                  el.trackImage.css({
                    'background': 'gray'
                  });
                }

                //update track title
                if (val.title) {
                  el.trackTitle.text(val.title);
                }else{
                  el.trackTitle.text('````````````````');
                }

                if (val.author) {
                  el.trackAuthor.text(val.author);
                }else{
                  el.trackAuthor.text('````````````````');
                }
              }


            });//end forEach
          });

          $(window).on('keyup', function(e) {
            e.preventDefault();

            //short cut for play/pause
            keysService.on('space', e, function (){
              audioService.playing ? audioService.pause() : audioService.play();
            });

            //short cut for track forward
            keysService.on('left', e, function (){
              var progress = 100 * $scope.audio.progress ;
              progress = Math.round(progress * 100) / 100
              progress = (progress - 5);

              if (progress > 0) {
                $scope.setTrackDuration(progress / 100); 
              }else{
                $scope.setTrackDuration(0); 
              }
            });

            //short cut for track backword
            keysService.on('right', e, function (){
              var progress = 100 * $scope.audio.progress ;
              progress = Math.round(progress * 100) / 100
              progress = (progress + 5);

              if (progress < 100) {
                $scope.setTrackDuration(progress/100); 
              }else{
                $scope.setTrackDuration(1); 
              }
            });

            keysService.on('up', e, function (){
              var volume = 100 * $scope.audio.volume ;
              volume = Math.round(volume * 100) / 100
              volume = (volume + 5);

              if (volume < 100) {
                $scope.setVolume(volume/100); 
              }else{
                $scope.setVolume(1); 
              }

            });

            keysService.on('down', e, function (){
              var volume = 100 * $scope.audio.volume ;
              volume = Math.round(volume * 100) / 100
              volume = (volume - 5);

              if (volume > 0) {
                $scope.setVolume(volume/100); 
              }else{
                $scope.setVolume(0.001);
              }
            });

            // console.log(e);
          });//end on-keyup

        }//end link
    };
}]);