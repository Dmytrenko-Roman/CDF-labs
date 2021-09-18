'use strict';

const url = document.getElementById("url");
url.outerHTML = '<p class="center_paragraph"><a href="https://www.vw.com/en/contact.html" target="_blank"><font face="Courier">Official Support</font></a></p>';

function loadMainPage() {
  location.assign("../Lab3/index.html");
}

function changeHeadersStyle() {
  let hdrs = document.querySelectorAll(".headers");
  for (let i = 0; i < hdrs.length; i++) {
    hdrs[i].style.fontFamily = "'Courier New', Courier, monospace";
  }
}

changeHeadersStyle();

const txt = document.body.firstChild;
console.log(
  { 'Текст': txt.data,'Посилання на головну сторiнку': url.textContent }
  );

let div = document.createElement('div');
div.className = "mainInfo";
div.innerHTML = "По остальным вопросам обращайтесь в официальное представительство Volkswagen.";
document.body.append(div);
setTimeout(() => div.remove(), 10000)