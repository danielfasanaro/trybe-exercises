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
function addOnClickHoliday(buttonId) {
  let holidayButton = document.querySelector('#' + buttonId);
  holidayButton.addEventListener('click', clickChangeBackground);
}
addOnClickHoliday('btn-holiday');

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

// Exercício 4:
function createFridayButton (buttonName) {
  let fridayButton = document.createElement('button');
  fridayButton.name = buttonName;
  fridayButton.innerText = buttonName;
  fridayButton.id = 'btn-friday';
  document.querySelector('.buttons-container').appendChild(fridayButton);
}
createFridayButton('Sexta-feira');

// Exercício 5:
function addOnClickFriday(buttonId) {
  let fridayButton = document.querySelector('#' + buttonId);
  fridayButton.addEventListener('click', clickChangeText);
}
addOnClickFriday('btn-friday');

function clickChangeText() {
  let fridays = document.querySelectorAll('.friday');
  for (let index = 0; index < fridays.length; index += 1) {
    if (fridays[index].innerText !== "Its Friday then..") {
      fridays[index].innerText = "Its Friday then..";
    } else {
      let friday = parseInt(fridays[index].nextElementSibling.innerText) - 1;
      fridays[index].innerText =  friday.toString();
    }
  }
}

// Exercício 6:
function addMouseZoom() {
  let days = document.querySelectorAll('.day');
  for (let index = 0; index < days.length; index += 1) {
    days[index].addEventListener('mouseover', mouseOverZoom);
    days[index].addEventListener('mouseout', mouseOutZoom);
  }
}
addMouseZoom();

function mouseOverZoom(event) {
  event.target.style.fontSize = '30px';
}

function mouseOutZoom(event) {
  event.target.style.fontSize = '20px';
}

// Exercício 7:
function addTask(taskName) {
  let task = document.createElement('span');
  task.innerText = taskName;
  document.querySelector('.my-tasks').appendChild(task);
}
addTask('My Task');

// Exercício 8:
function addTaskLabel(color) {
  let taskLabel = document.createElement('div');
  taskLabel.style.backgroundColor = color;
  taskLabel.className = 'task';
  document.querySelector('div.my-tasks').appendChild(taskLabel);
}
addTaskLabel('red');

// Exercício 9;
function addOnClickLabel() {
  let selectedTask = document.querySelector('div.task');
  selectedTask.addEventListener('click', changeClassTask);
  console.log('teste');
}
addOnClickLabel();

function changeClassTask(event) {
  console.log(event.target);
  if (event.target.className === 'task selected') {
    event.target.className = 'task';
  } else {
    event.target.className = 'task selected';
  }
}
