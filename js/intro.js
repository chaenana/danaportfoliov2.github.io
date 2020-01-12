
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
$cursorBG.style.transform = 'scale(1.5)';
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
