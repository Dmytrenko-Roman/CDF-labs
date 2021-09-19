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

function replace() {
  const p = document.getElementById("sup");
  const t = document.createTextNode("Підтримка");
  const h1 = document.createElement("h1");
  h1.appendChild(t);
  t.after(" | Інформація");
  h1.className = "supHeader";
  p.replaceWith(h1);
}

changeHeadersStyle();
replace();

let c = document.getElementsByTagName("H1")[0];
let txt = c.childNodes[0].nodeValue;
console.info(
  { 'Текст': txt,'Посилання на головну сторiнку': url.textContent }
  );

let div = document.createElement('div');
div.className = "mainInfo";
div.innerHTML = "Щодо запитань звертайтесь в офіційне представництво Volkswagen.";
document.body.prepend(div);

setTimeout(function () {
  div.remove();
  document.body.append(div);
  }, 10000);
