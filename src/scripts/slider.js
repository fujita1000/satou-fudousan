( function($) {
  
  $(document).ready(function() {
    
    var s           = $('.slider'),
        sWrapper    = s.find('.slider-wrapper'),
        sItem       = s.find('.slide'),
        btn         = s.find('.slider-link'),
        sWidth      = sItem.width(),
        sCount      = sItem.length,
        slide_date  = s.find('.slide-date'),
        slide_title = s.find('.slide-title'),
        slide_text  = s.find('.slide-text'),
        slide_more  = s.find('.slide-more'),
        slide_image = s.find('.slide-image img'),
        sTotalWidth = sCount * sWidth;
    
    sWrapper.css('width', sTotalWidth);
    sWrapper.css('width', sTotalWidth);
    
    var clickCount  = 0;
    
    //CLICK EVENT
    btn.on('click', function(e) {
      e.preventDefault();

      if( $(this).hasClass('next') ) {
        
        ( clickCount < ( sCount - 1 ) ) ? clickCount++ : clickCount = 0;
      } else if ( $(this).hasClass('prev') ) {
        
        ( clickCount > 0 ) ? clickCount-- : ( clickCount = sCount - 1 );
      }
      gsap.to(sWrapper, 0.4, {x: '-' + ( sWidth * clickCount ) })


      //CONTENT ANIMATIONS

      var fromProperties = {autoAlpha:0, x:'-50', y:'-10'};
      var toProperties = {autoAlpha:0.8, x:'0', y:'0'};

      gsap.fromTo(slide_image, 1, {autoAlpha:0}, {autoAlpha:1, y:'0'});
      gsap.fromTo(slide_date, 0.4, fromProperties, toProperties);
      gsap.fromTo(slide_title, 0.6, fromProperties, toProperties);
      gsap.fromTo(slide_text, 0.8, fromProperties, toProperties);
      gsap.fromTo(slide_more, 1, fromProperties, toProperties);

    });
        
    

  });
})(jQuery);

$('.overlay').addClass('overlay-blue');

// https://codepen.io/gvrban/pen/qjbpaa



// AUTOPLAY
// https://codepen.io/AngelKrak/pen/jbrObj
$(document).ready(function(){
    var slides, timer;
    slides = $('#slider .slidesContainer > .slide');
    function sliderScroll(direction){

       position = $('#slider').scrollLeft();

       totalWidth = (slides.length * slides[0].offsetWidth) - slides[0].offsetWidth

       switch (direction) {
            case 'right':
                if (position+slides[0].offsetWidth > totalWidth){
                    $('#slider:not(:animated)').animate({scrollLeft:0},1000);
                } else { 
                    $('#slider:not(:animated)').animate({scrollLeft:position+slides[0].offsetWidth},1000);
                }
                break;

            case 'left': //Izquierda
                if (position-slides[0].offsetWidth < 0){ 
                    $('#slider:not(:animated)').animate({scrollLeft:totalWidth},1000);
                } else { 
                    $('#slider:not(:animated)').animate({scrollLeft:position-slides[0].offsetWidth},1000);
                }
                break;
        }

   }

   function initTimer(){
        timer = setInterval(function(){sliderScroll('right');}, 5000);
   }

    $('#slider .slidesContainer').css('width',slides[0].offsetWidth * slides.length);


    $('.next').click(function(){
        clearInterval(timer); 
        sliderScroll('right'); 
        initTimer(); 
        return false;
    });


    $('.prev').click(function(){
        clearInterval(timer); 
        sliderScroll('left'); 
        initTimer(); 
        return false;
    });


    initTimer();

});