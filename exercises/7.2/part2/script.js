const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

const addNewKey = (object, key, value) => {
  object[key] = value;
}

addNewKey(lesson2, 'turno', 'manhã');

const listKeys = function(object) {
  return Object.keys(object);
}

const sizeOfObject = function(object) {
  return Object.keys(object).length;
}

const listValues = function(object) {
  return Object.values(object);
}

// const allLessons = {
//   lesson1: Object.assign({}, lesson1),
//   lesson2: Object.assign({}, lesson2),
//   lesson3: Object.assign({}, lesson3)
// };

// const allLessons = {};
// allLessons['lesson1'] = Object.assign({}, lesson1);
// allLessons['lesson2'] = Object.assign({}, lesson2);
// allLessons['lesson3'] = Object.assign({}, lesson3);

const allLessons = Object.assign({}, { lesson1, lesson2, lesson3 });

const getNumberOfStudents = function(object) {
  let numberOfStudents = 0;
  for (let key in object) {
    numberOfStudents += object[key]['numeroEstudantes'];
  }
  return numberOfStudents;
}

const getValueByNumber = function(object, index) {
  return Object.values(object)[index];
}

const verifyPair = function(object, key, value) {
  return Object.entries(object).find((currentValue) => (currentValue[0] === key && currentValue[1] === value) ? true : false) ? true : false;
}

// console.log(lesson2);
// console.log(listKeys(lesson2));
// console.log(sizeOfObject(lesson2));
// console.log(listValues(lesson2));
// console.log(allLessons);
// console.log(getNumberOfStudents(allLessons));
// console.log(getValueByNumber(lesson1, 0));
// console.log(verifyPair(lesson3, 'turno', 'noite'));

