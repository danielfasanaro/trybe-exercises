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

const allLessons = Object.assign({}, { lesson1, lesson2, lesson3 });

const getStudentsBySubject = function(object, subject) {
  let numberOfStudents = 0;
  for (let key in object) {
    if (object[key].materia === subject){
      numberOfStudents += object[key]['numeroEstudantes'];
    }
  }
  return numberOfStudents;
}

console.log(getStudentsBySubject(allLessons, 'Matemática'));