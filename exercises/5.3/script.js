function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
};

createDaysOfTheWeek();

// Escreva seu código abaixo.
// Exercício 1:
function createDaysOfTheMonth() {
  const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
  let dezDays = document.querySelector('#days');
  for (let index = 0; index < dezDaysList.length; index++) {
    let days = dezDays.appendChild(document.createElement('li'));
    days.className = 'day';
    days.innerText = dezDaysList[index];
    if (dezDaysList[index] == 24 || dezDaysList[index] == 25 || dezDaysList[index] == 31) {
      days.className += ' holiday';
    }
    if (dezDaysList[index] == 4 || dezDaysList[index] == 11 || dezDaysList[index] == 18 || dezDaysList[index] == 25) {
      days.className += ' friday';
    }
  }
}
createDaysOfTheMonth();

// Exercício 2:
function createHolidaysButton (buttonName) {
  let holidayButton = document.createElement('button');
  holidayButton.name = buttonName;
  holidayButton.innerText = buttonName;
  holidayButton.id = 'btn-holiday';
  document.querySelector('.buttons-container').appendChild(holidayButton);
}
createHolidaysButton('Feriados');

// Exercício 3:
function addOnClick(buttonId) {
  let holidayButton = document.querySelector('#' + buttonId);
  holidayButton.addEventListener('click', clickChangeBackground);
}
addOnClick('btn-holiday');

function clickChangeBackground() {
  let holidays = document.querySelectorAll('.holiday');
  for (let index = 0; index < holidays.length; index += 1) {
    let color = 'blue';
    if (holidays[index].style.backgroundColor === color) {
      color = '';
    }
    holidays[index].style.backgroundColor = color;
  }
}