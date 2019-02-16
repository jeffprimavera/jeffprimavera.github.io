/*
[Main Script]

Project     : Online Portfolio
Author      : Jeffrey Primavera
*/

//Nav menu
$('body').on('click', '.nav-trigger', function() {
    $(this).toggleClass('on');
    $('.nav-menu').fadeToggle('slow',function(){
        $('.item-menu').on('click',function(){
            location.reload();
        });
    });        
});  

//Slider swiper Homepage
var swiper = new Swiper('.hp-swiper', {
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  autoplay: {
    delay: 7000,
    disableOnInteraction: false,
  },
})

// On scroll on header
$(window).scroll(function() {    
  var scroll = $(window).scrollTop();

    if (scroll >= 50) {
        $("header").addClass("is-sticky");
    } else {
        $("header").removeClass("is-sticky");
    }
});

//Scroll to top when arrow up clicked BEGIN
$( document ).ready(function() {
  $(window).scroll(function() {
      var height = $(window).scrollTop();
      if (height > 100) {
          $('#back2Top').fadeIn();
      } else {
          $('#back2Top').fadeOut();
      }
  });
  $(document).ready(function() {
      $("#back2Top").click(function(event) {
          event.preventDefault();
          $("html, body").animate({ scrollTop: 0 }, "slow");
          return false;
      });

  });
});

// WOW JS
wow = new WOW(
  {
  boxClass:     'wow',      // default
  animateClass: 'animated', // default
  offset:       0,          // default
  mobile:       true,       // default
  live:         true        // default
}
)
wow.init();

//Scroll to top when arrow up clicked BEGIN
$( document ).ready(function() {
  $(window).scroll(function() {
      var height = $(window).scrollTop();
      if (height > 100) {
          $('#back2Top').fadeIn();
      } else {
          $('#back2Top').fadeOut();
      }
  });
  $(document).ready(function() {
      $("#back2Top").click(function(event) {
          event.preventDefault();
          $("html, body").animate({ scrollTop: 0 }, "slow");
          return false;
      });

  });
});

/*
* -----------------------------------------------------------------
*-----------------------------Typed Js-----------------------------
* -----------------------------------------------------------------
*/
if ($(".welcome-area").is(".animated-text")) {
    var typed = new Typed("#typed", {
        stringsElement: '#typed-strings',
        typeSpeed: 60,
        backSpeed: 30,
        backDelay: 2000,
        startDelay: 1000,
        loop: true

    });
};

/* Custom JS - Smooth Scroll*/
// Custom scrolling speed with jQuery
// Source: github.com/ByNathan/jQuery.scrollSpeed
// Version: 1.0.2

(function($) {

    $(document).ready(function(){
                // $fn.scrollSpeed(step, speed, easing);
                jQuery.scrollSpeed(150, 1000);
    });
    
    jQuery.scrollSpeed = function(step, speed, easing) {
        
        var $document = $(document),
            $window = $(window),
            $body = $('html, body'),
            option = easing || 'default',
            root = 0,
            scroll = false,
            scrollY,
            scrollX,
            view;
            
        if (window.navigator.msPointerEnabled)
        
            return false;
            
        $window.on('mousewheel DOMMouseScroll', function(e) {
            
            var deltaY = e.originalEvent.wheelDeltaY,
                detail = e.originalEvent.detail;
                scrollY = $document.height() > $window.height();
                scrollX = $document.width() > $window.width();
                scroll = true;
            
            if (scrollY) {
                
                view = $window.height();
                    
                if (deltaY < 0 || detail > 0)
            
                    root = (root + view) >= $document.height() ? root : root += step;
                
                if (deltaY > 0 || detail < 0)
            
                    root = root <= 0 ? 0 : root -= step;
                
                $body.stop().animate({
            
                    scrollTop: root
                
                }, speed, option, function() {
            
                    scroll = false;
                
                });
            }
            
            if (scrollX) {
                
                view = $window.width();
                    
                if (deltaY < 0 || detail > 0)
            
                    root = (root + view) >= $document.width() ? root : root += step;
                
                if (deltaY > 0 || detail < 0)
            
                    root = root <= 0 ? 0 : root -= step;
                
                $body.stop().animate({
            
                    scrollLeft: root
                
                }, speed, option, function() {
            
                    scroll = false;
                
                });
            }
            
            return false;
            
        }).on('scroll', function() {
            
            if (scrollY && !scroll) root = $window.scrollTop();
            if (scrollX && !scroll) root = $window.scrollLeft();
            
        }).on('resize', function() {
            
            if (scrollY && !scroll) view = $window.height();
            if (scrollX && !scroll) view = $window.width();
            
        });       
    };
    
    jQuery.easing.default = function (x,t,b,c,d) {
    
        return -c * ((t=t/d-1)*t*t*t - 1) + b;
    };
    
})(jQuery);
