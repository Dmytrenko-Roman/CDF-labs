'use strict';

setInterval(function() {
    document.querySelector('body').style.background = 'black';
}, 3000);

const Comparison = (string1, string2) => {
  let answer = '';
  string1.length > string2.length ? answer = string1 : answer = string2;
  alert(answer);
}

Comparison('BMW', 'Volkswagen вітає вас!')