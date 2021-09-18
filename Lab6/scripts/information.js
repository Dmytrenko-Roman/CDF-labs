'use strict';

function Information(name, surname, image, position = 'Директор') {
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
  const th4 = document.createElement("TH");
  const n = document.createTextNode("Ім'я");
  const s = document.createTextNode("Прізвище");
  const i = document.createTextNode("Фотографія");
  const p = document.createTextNode("Позиція");
  th1.appendChild(n);
  th2.appendChild(s);
  th3.appendChild(i);
  th4.appendChild(p);
  document.getElementById("myTr1").appendChild(th1);
  document.getElementById("myTr1").appendChild(th2);
  document.getElementById("myTr1").appendChild(th3);
  document.getElementById("myTr1").appendChild(th4);

  const tr2 = document.createElement("TR");
  tr2.setAttribute("id", "myTr2");
  document.getElementById("myTable").appendChild(tr2);

  const th1_2 = document.createElement("TH");
  const th2_2 = document.createElement("TH");
  const th3_2 = document.createElement("TH");
  const th4_2 = document.createElement("TH");
  const n_2 = document.createTextNode(name);
  const s_2 = document.createTextNode(surname);
  const i_2 = document.createTextNode(image)
  const p_2 = document.createTextNode(position);
  th1_2.appendChild(n_2);
  th2_2.appendChild(s_2);
  th3_2.appendChild(i_2);
  th4_2.appendChild(p_2);
  document.getElementById("myTr2").appendChild(th1_2);
  document.getElementById("myTr2").appendChild(th2_2);
  document.getElementById("myTr2").appendChild(th3_2);
  document.getElementById("myTr2").appendChild(th4_2);
}

Information('Роман', 'Дмитренко', '../../../imgs/vw.png');