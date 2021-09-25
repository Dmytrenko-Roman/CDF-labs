'use strict';

let selected_li;

class EventHandler {
  handleEvent(event) {
    if (event.type === 'click') {
      beetle_header.setAttribute("title", "Фольксваген Жук")
    } else {
      beetle_header.setAttribute("title", "Volkswagen Kever")
    }
  }
}

img.onclick = function loadMainPage() {
  location.assign("../Lab3/index.html");
}

beetle_ul.onclick = function(event) {
  let target = event.target;
  if (target.tagName != 'LI') return;
  highlight(target);
}

function handler1() { 
  alert("Volkswagen Beetle (вимова: укр. Фольксваґен бітл) — компактний автомобіль, який виробляється і продається компанією Volkswagen. Схожий на свого попередника Volkswagen New Beetle, однак дизайн автомобіля багато в чому ріднить його зі своїм далеким предком — оригінальним Volkswagen Käfer. Beetle більший, ніж New Beetle (на 149 мм довший) і базується на платформі A5 (PQ35) поряд з Volkswagen Jetta. Крім того, висота менша на 12 мм ніж у попередника, а ширина — на 87 мм більше. Обсяг багажника теж збільшився (310 л. Проти 209 л.). Друге покоління Beetle буде вироблятися на заводі Volkswagen в Пуебла, Мексика, Там само, де і Volkswagen Jetta. Кабріолет-версія з'явиться після купе в 2012 роцію.Слідом повинна вийти версія Beetle R."); 
}

function handler2() { 
  alert('Невидима інформація.'); 
}

function highlight(li) {
  if (selected_li) {
    selected_li.classList.remove('highlight');
  }
  selected_li = li;
  selected_li.classList.add('highlight');
}

vw_beetle.onmouseover = function(event) {
  const title = event.type + " на " + event.currentTarget;
  vw_beetle.setAttribute("title", title);
}

vw_beetle.addEventListener('click', handler1);

const event_handler = new EventHandler();

beetle_header.addEventListener('click', event_handler);
beetle_header.addEventListener('contextmenu', event_handler);
beetle_header.removeEventListener('contextmenu', event_handler);
