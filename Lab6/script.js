'use strict';

setInterval(function() {
    document.querySelector('body').style.background = 'black';
}, 30000);

const comparison = (string1, string2) => {
  let answer = '';
  string1.length > string2.length ? answer = string1 : answer = string2;
  alert(answer);
}

comparison('BMW', 'Volkswagen вітає вас!')