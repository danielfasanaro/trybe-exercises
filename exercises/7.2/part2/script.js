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

const listKeys = function(object) {
  return Object.keys(object);
}

const sizeOfObject = function(object) {
  return Object.keys(object).length;
}

addNewKey(lesson2, 'turno', 'manhã');

console.log(lesson2);
console.log(listKeys(lesson2));
console.log(sizeOfObject(lesson2));
