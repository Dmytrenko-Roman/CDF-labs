'use strict';

img.onclick = function loadMainPage() {
  location.assign("../Lab3/index.html");
}

vw_polosedan.onmouseover = vw_polosedan.onmouseout = handler;

function handler(event) {
  if (event.type == 'mouseover') {
    event.target.style.background = 'white';
  }
  if (event.type == 'mouseout') {
    event.target.style.background = 'red';
  }
}
