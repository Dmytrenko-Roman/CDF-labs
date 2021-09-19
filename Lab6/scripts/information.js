'use strict';

function Information(name, surname, position = 'Директор') {
  const table = document.createElement("TABLE");
  table.setAttribute("id", "myTable");
  document.body.appendChild(table);

  const caption = document.createElement("CAPTION");
  const capt = document.createTextNode("Інформація про розробника");
  caption.appendChild(capt);
  document.getElementById("myTable").appendChild(caption);

  const tr1 = document.createElement("TR");
  tr1.setAttribute("id", "myTr1");
  document.getElementById("myTable").appendChild(tr1);

  const th1 = document.createElement("TH");
  const th2 = document.createElement("TH");
  const th3 = document.createElement("TH");
  const n = document.createTextNode("Ім'я");
  const s = document.createTextNode("Прізвище");
  const p = document.createTextNode("Посада");
  th1.appendChild(n);
  th2.appendChild(s);
  th3.appendChild(p);
  document.getElementById("myTr1").appendChild(th1);
  document.getElementById("myTr1").appendChild(th2);
  document.getElementById("myTr1").appendChild(th3);

  const tr2 = document.createElement("TR");
  tr2.setAttribute("id", "myTr2");
  document.getElementById("myTable").appendChild(tr2);

  const th1_2 = document.createElement("TH");
  const th2_2 = document.createElement("TH");
  const th3_2 = document.createElement("TH");
  const n_2 = document.createTextNode(name);
  const s_2 = document.createTextNode(surname);
  const p_2 = document.createTextNode(position);
  th1_2.appendChild(n_2);
  th2_2.appendChild(s_2);
  th3_2.appendChild(p_2);

  document.getElementById("myTr2").appendChild(th1_2);
  document.getElementById("myTr2").appendChild(th2_2);
  document.getElementById("myTr2").appendChild(th3_2);
}

Information('Роман', 'Дмитренко');
