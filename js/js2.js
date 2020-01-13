
// 네비게이션

$(document).ready(function(){
    $('.seeall').click(function(){
      $(this).toggleClass('open');
    });
  });

  function openNav1() {
    document.getElementById("mySidenav").style.width = "100%";
}

function closeNav1() {
    document.getElementById("mySidenav").style.width = "0";
}





$(document).ready(function(){
    $('.Down').click(function(){
      $(this).toggleClass('open');
    });
  });

  function openNav2() {
    document.getElementById("aboutme").style.width = "100%";
}

function closeNav2() {
    document.getElementById("aboutme").style.width = "0";
}











//마우스 커서
var $cursorDot = document.querySelector("#cursor-dot");
var $cursorBG = document.querySelector("#cursor-bg");

window.addEventListener("mousemove", onMouseMoveWindow);

function onMouseMoveWindow(e) {
    var posX = e.clientX, posY = e.clientY;
    TweenMax.to($cursorDot, 0.1,{css : {top:posY,left:posX}, ease : Quad.easeInOut});
    TweenMax.to($cursorBG, 0.18,{css : {top:posY,left:posX}, ease : Quad.easeInOut});

}


const handleMousePos = (e) => {
const CURSOR = document.querySelector('#cursor-bg');
const HOVER = document.querySelectorAll('.cursor-hover');
const { pageX: posX, pageY: posY } = e;

const runMouseOver = () => {
$cursorBG.style.transform = 'scale(2)';
 $cursorBG.style.background = 'none';
 };
HOVER.forEach(hover => hover.addEventListener('mouseenter', runMouseOver));

 const runMouseLeave = () => {
  CURSOR.style.transform = '';
   CURSOR.style.background = '';
  };
   HOVER.forEach(hover => hover.addEventListener('mouseleave', runMouseLeave));
  
   return (
     CURSOR.style.left = `${posX - 10}px`,
     CURSOR.style.top = `${posY - 10}px`  
  );
 };
 document.addEventListener('mousemove', handleMousePos);


//옆에서 스르륵 나타남


$(document).ready(function() {
  $(window).scroll( function(){
      $('.fade-up').each( function(i){
          
          var bottom_of_element = $(this).offset().top + $(this).outerHeight();
          var bottom_of_window = $(window).scrollTop() + $(window).height();
          
          if( bottom_of_window > bottom_of_element ){
              $(this).animate({'margin-left':'30px', 'visibility' : 'visible'},1500);
          }
          
      }); 
  });
});



$(document).ready(function() {
  $(window).scroll( function(){
      $('.rev').each( function(i){
          
          var bottom_of_element = $(this).offset().top + $(this).outerHeight();
          var bottom_of_window = $(window).scrollTop() + $(window).height();
          
          if( bottom_of_window > bottom_of_element ){
              $(this).animate({'opacity':'1','margin-top':'0px'}, 1500);
          }
          
      }); 
  });
});



$(document).ready(function() {
  $(window).scroll( function(){
      $('.view-container').each( function(i){
          
          var bottom_of_element = $(this).offset().top + $(this).outerHeight();
          var bottom_of_window = $(window).scrollTop() + $(window).height();
          
          if( bottom_of_window > bottom_of_element ){
              $(this).animate({'opacity':'1'}, 1800);
          }
          
      }); 
  });
});


$(document).ready(function() {
  $(window).scroll( function(){
      $('.fade').each( function(i){
          
          var bottom_of_element = $(this).offset().top + $(this).outerHeight();
          var bottom_of_window = $(window).scrollTop() + $(window).height();
          
          if( bottom_of_window > bottom_of_element ){
              $(this).animate({'opacity':'1'}, 1500);
          }
          
      }); 
  });
});


/*
 * jQuery throttle / debounce - v1.1 - 3/7/2010
 * http://benalman.com/projects/jquery-throttle-debounce-plugin/
 * 
 * Copyright (c) 2010 "Cowboy" Ben Alman
 * Dual licensed under the MIT and GPL licenses.
 * http://benalman.com/about/license/
 */


(function(b,c){var $=b.jQuery||b.Cowboy||(b.Cowboy={}),a;$.throttle=a=function(e,f,j,i){var h,d=0;if(typeof f!=="boolean"){i=j;j=f;f=c}function g(){var o=this,m=+new Date()-d,n=arguments;function l(){d=+new Date();j.apply(o,n)}function k(){h=c}if(i&&!h){l()}h&&clearTimeout(h);if(i===c&&m>e){l()}else{if(f!==true){h=setTimeout(i?k:l,i===c?e-m:e)}}}if($.guid){g.guid=j.guid=j.guid||$.guid++}return g};$.debounce=function(d,e,f){return f===c?a(d,e,false):a(d,f,e!==false)}})(this);




$(document).ready(function() {
    var slideArr = [];
    var i = 1;
    function prevSlide(){
        //scroll up
        if (i > 1) { i--; }
        moveSlide = (100 / slideCount) * ( i-1 );
        slideMask.css('transform', 'translateX(-' + moveSlide + '%)');
        $('.scroll-slide, .pager-circles').removeClass('active');
        $('#scroll-slide-' + i + ',#pager-' + i).addClass('active');
    }
    
    function nextSlide(){
        //scroll down
        if (i < slideArr.length) { i++; }
        moveSlide = (100 / slideCount) * ( i-1 );
        slideMask.css('transform', 'translateX(-' + moveSlide + '%)');
        $('.scroll-slide, .pager-circles').removeClass('active');
        $('#scroll-slide-' + i + ',#pager-' + i).addClass('active');
    }
    
    $('.scroll-slide').each(function() {
        var slideId = $(this).attr('id');
        //var slideNo = slideId.slice(-1);
        slideArr.push(slideId);
        return slideArr;
    }); //each
    
    /* Important variables. Selectors, do some maths etc */
    var slideCount = slideArr.length;
    var maskWidth = slideCount * 100;
    var slideMask = $('#scroll-mask');
    var scrollSlides = $('#scroll-mask .scroll-slide');
    var moveSlide;
    slideMask.css('width', maskWidth + '%');
    scrollSlides.css('width', ( 100 / slideCount ) + '%');
    
   
    $(window).bind('mousewheel wheel', $.debounce(150, function(event) {
        if (event.originalEvent.wheelDelta >= 0) {
            prevSlide();
        } else {
            nextSlide();
        }
    })); //bind
    
    $(document).keydown( $.debounce(150, function(e){
        switch(e.which){
            case 37: //left arrow
            case 38: //up arrow
                prevSlide();
                break;
            case 39: // right arrow
            case 40: // down arrow
                nextSlide();
                break;
        }
    })); //keydown

}); //ready







$('.slide-nav').on('click', function(e) {
    e.preventDefault();
    // get current slide
    var current = $('.flex--active').data('slide'),
      // get button data-slide
      next = $(this).data('slide');
  
    $('.slide-nav').removeClass('active');
    $(this).addClass('active');
  
    if (current === next) {
      return false;
    } else {
      $('.slider__warpper').find('.flex__container[data-slide=' + next + ']').addClass('flex--preStart');
      $('.flex--active').addClass('animate--end');
      setTimeout(function() {
        $('.flex--preStart').removeClass('animate--start flex--preStart').addClass('flex--active');
        $('.animate--end').addClass('animate--start').removeClass('animate--end flex--active');
      }, 800);
    }
  });