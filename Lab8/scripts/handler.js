'use strict';

const txt = document.getElementById("polosedan_info");

img.onclick = function loadMainPage() {
  location.assign("../Lab3/index.html");
}

vw_polosedan.onmouseover = vw_polosedan.onmouseout = handler;

function handler(event) {
  if (event.type == 'mouseover') {
    event.target.style.background = 'white';
    event.relatedTarget.style.background = 'black';
  }
  if (event.type == 'mouseout') {
    event.target.style.background = '';
  }
}

txt.onmousedown = function(event) {
  txt.style.position = 'absolute'; 
  txt.style.zIndex = 1000;
  document.body.append(txt);
  moveAt(event.pageX, event.pageY);
 
  function moveAt(pageX, pageY) { 
    txt.style.left = pageX - txt.offsetWidth / 2 + 'px'; 
    txt.style.top = pageY - txt.offsetHeight / 2 + 'px'; 
  }

  function onMouseMove(event) { 
    moveAt(event.pageX, event.pageY); 
  }

  document.addEventListener('mousemove', onMouseMove);

  txt.onmouseup = function() { 
    document.removeEventListener('mousemove', onMouseMove); 
    txt.onmouseup = null; 
  }
}

ball.ondragstart = function() { 
  return false;
}
