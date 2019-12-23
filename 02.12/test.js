var weekDayNumber = 7;

if (weekDayNumber === 1) {
  alert("ПН");
} else if (weekDayNumber === 2) {
  alert("ВТ");
} else if (weekDayNumber === 3) {
  alert("СР");
} else if (weekDayNumber === 4) {
  alert("ЧТ");
} else if (weekDayNumber === 5) {
  alert("ПТ");
} else if (weekDayNumber === 6) {
  alert("СБ");
} else if (weekDayNumber === 7) {
  alert("ВС");
} else {
  alert("Такого дня недели нет!");
}

switch (weekDayNumber) {
  case 1:
    alert("ПН");
    break;
  case 2:
    alert("ВТ");
    break;
  case 3:
    alert("СР");
    break;
  case 4:
    alert("ЧТ");
    break;
  case 5:
    alert("ПТ");
    break;
  case 6:
    alert("СБ");
    break;
  case 7:
    alert("ВС");
    break;
  default:
    alert("Такого дня недели нет!");
}