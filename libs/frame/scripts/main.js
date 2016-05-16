jQuery(document).ready(function($) {
  var log = $('.log');

  $(window).resize(function(event) {
    log.find('.window-size').text($(this).width() + 'px');
  });

  log.find('.window-size').text($(this).width() + 'px');


  var slider = $('.slider');
  var slide_timing = 300;

  slider.each(function(index, el) {
    registerSliders( $(el), slide_timing)
  });
});

function registerSliders(slider, slide_timing){
  /*Slider code :-)*/
  var slide_state ={
    current: 2,
    count: 3,
  };
  var slide_items = slider.find('.slide-item');
  slide_state.count = slide_items.length;
  var left = slider.find('.left-box');
  var right = slider.find('.right-box');

  var timer1;
  left.click(function(event) {
    if (timer2) { clearTimeout(timer1)};
    timer1 = setTimeout(function(){

      var move_left, right_slide_no, current_slide_no;
      var slide_width = "100%";

      //move current to left by its width
      current_slide_no = slide_state.current ;
      left_slide_no = slide_state.current - 1 ;
      if (current_slide_no === 1) { left_slide_no = slide_state.count}

      var current_slide =  slider.find('.slide-item-'+ current_slide_no);
      var left_slide =  slider.find('.slide-item-'+ left_slide_no);

      $.when(
        current_slide.animate({
          left: '+=' + slide_width
        }, {duration: slide_timing, queue: false}).promise(),

        //move right slide-item to left by its width
          left_slide.animate({
            left: '+=' + slide_width
          }, {duration: slide_timing, queue: false}).promise()
      ).done(function (){
        slide_state.current = left_slide_no;
        if (left_slide_no === 1) { 
          left_slide_no = slide_state.count
        }else{
          left_slide_no = slide_state.current - 1 ;
        }
        
        var  now_left;

        //if now_right is present then ok else load from server and attatch
        now_left = slider.find('.slide-item-'+ left_slide_no); 
        now_left.css({left: '-' + slide_width});

        console.log(current_slide_no);
        console.log('Left : '+ left_slide_no);
      })
    },300);
  });

  var timer2;
  //Right btn clicked
  right.click(function(event) {
    if (timer2) { clearTimeout(timer2)};
    timer2 = setTimeout(function(){

      var move_left, right_slide_no, current_slide_no;
      var slide_width = "100%";
      //move current to left by its width
      current_slide_no = slide_state.current ;
      right_slide_no = ( slide_state.current % slide_state.count ) + 1 ;

      console.log(current_slide_no);

      var current_slide =  slider.find('.slide-item-'+ current_slide_no);
      var right_slide =  slider.find('.slide-item-'+ right_slide_no);

      $.when(
        current_slide.animate({
          left: '-=' + slide_width
        }, {duration: slide_timing, queue: false}).promise(),

        //move right slide-item to left by its width
          right_slide.animate({
            left: '-=' + slide_width
          }, {duration: slide_timing, queue: false}).promise()
      ).done(function (){
        slide_state.current = right_slide_no;
        right_slide_no = ( slide_state.current % slide_state.count ) + 1 ;
        var  now_right;

        //if now_right is present then ok else load from server and attatch
        now_right = slider.find('.slide-item-'+ right_slide_no); 
        now_right.css({left: slide_width});

        console.log('Right - '+ right_slide_no);
      })
    },300);
  });
  //end slider code
}