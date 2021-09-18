'use strict';

function Information(name, surname, photo, position = 'Директор') {
  const table = document.createElement("TABLE");
  table.setAttribute("id", "myTable");
  document.body.appendChild(table);

  const caption = document.createElement("CAPTION");
  const capt = document.createTextNode("Інформація про розробника");
  caption.appendChild(capt);
  document.getElementById("myTable").appendChild(caption);

  const tr = document.createElement("TR");
  tr.setAttribute("id", "myTr");
  document.getElementById("myTable").appendChild(tr);

  const th1 = document.createElement("TH");
  const th2 = document.createElement("TH");
  const t = document.createTextNode("Ім'я");
  const b = document.createTextNode("Прізвище");
  th1.appendChild(t);
  th2.appendChild(b);
  document.getElementById("myTr").appendChild(th1);
  document.getElementById("myTr").appendChild(th2);
}

Information('Роман', 'Дмитренко', 'src')