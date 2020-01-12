// 누르면 다음으로가는거

$(document).ready(function(){
    // Add smooth scrolling to all links
    $("a").on('click', function(event) {
  
      // Make sure this.hash has a value before overriding default behavior
      if (this.hash !== "") {
        // Prevent default anchor click behavior
        event.preventDefault();
  
        // Store hash
        var hash = this.hash;
        //hash 라는건 알아서 다음꺼로 계산을 해주는? 그런거인듯함
  
        // Using jQuery's animate() method to add smooth page scroll
        // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 700, function(){
     
          // Add hash (#) to URL when done scrolling (default click behavior)
          window.location.hash = hash;
        });
      } // End if
    });
  });


// 네비게이션

  $(document).ready(function(){
    $('.seeall').click(function(){
      $(this).toggleClass('open');
    });
  });

  function openNav() {
    document.getElementById("mySidenav").style.width = "100%";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}


// 옆에서 나오는애

const COLOR_LIST = ['black'];
let $targetList;

const init = () => {

  $targetList = document.querySelectorAll('[data-js="reveal"]');

  setup();

  window.addEventListener('scroll', onScroll, false);
  window.dispatchEvent(new Event('scroll'));

};

const getArrayRandomValue = array => array[Math.floor(Math.random() * array.length)];

const setup = () => {

  for (const $target of $targetList) {

    const content = $target.innerHTML;
    const color = 'revealColor' in $target.dataset ? $target.dataset.revealColor : getArrayRandomValue(COLOR_LIST);
    $target.innerHTML = `<span data-reveal="content"><div data-reveal="cover" style="background-color:${color}"></div><span data-reveal="text">${content}</span></span>`;

  }

};

const onScroll = () => {

  const windowH = window.innerHeight;
  const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
  const isMostScroll = document.body.clientHeight <= scrollTop + windowH;

  for (const $target of $targetList) {

    if ($target.classList.contains('loaded')) continue;

    const rect = $target.getBoundingClientRect();
    const top = rect.top + scrollTop;
    if (isMostScroll || top <= scrollTop + windowH * .8) $target.classList.add('loaded');

  }

};


document.addEventListener('DOMContentLoaded', init, false);



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
// $cursorBG.style.transform = 'scale(1.5)';
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
      $('.rev').each( function(i){
          
          var bottom_of_element = $(this).offset().top + $(this).outerHeight();
          var bottom_of_window = $(window).scrollTop() + $(window).height();
          
          if( bottom_of_window > bottom_of_element ){
              $(this).animate({'opacity':'1','margin-top':'0px'}, 1500);
          }
          
      }); 
  });
});


// scroll indicator
const sections = document.querySelectorAll('section-area')
const windowHeight = window.innerHeight
const scrollIndicator = document.querySelector('.scroll-indicator')

console.log(windowHeight)

function reset() {
  for (var i = 0; i < scrollIndicator.children.length; i++) {
    scrollIndicator.children[i].classList.remove('you-are-here')
  }
}

window.addEventListener('scroll', function() {
  const scrollTop = window.scrollY
  sections.forEach(function(section, i){
    if (section.offsetTop < scrollTop + windowHeight && scrollTop < section.offsetTop + windowHeight) {
      reset()
      scrollIndicator.children[i].classList.add('you-are-here')
    }
  })
})

document.querySelectorAll('.scroll-indicator li').forEach(function(item, i) {
  item.addEventListener('click', function(){
    window.scrollTo({
      top: i * windowHeight,
      behavior: 'smooth'
    })
  })
})



$(document).ready(function(){
	
	$(document).on('mouseover', '[data-toggle="attribute"]', function () {
			var $target = $($(this).data('target'));
			var img_switch = $(this).data('switch');
			$target.attr('src', img_switch);
			
			return false;
		});

});


var $btnabout = $('.m-buttons').find('.Down');
var $btnhome = $('.m-buttons').find('.home');
var $section1 = $('#section-1');
var $section2 = $('#section-2');

$btnabout.on('click',function(){
  $section1.animate({'left':'-100%'},1000);
  $section2.animate({'left':'0%'},1000);
  // mottolinew();
})

  $btnhome.on('click',function(){
  $section1.animate({'left':'0%'},1000);
  $section2.animate({'left':'100%'},1000);
  // mottolinew();
})



