
const assert = require('assert');

const names = [
  'Aanemarie',  'Adervandes',   'Akifusa',
  'Abegildo',   'Adicellia',    'Aladonata',
  'Abeladerco', 'Adieidy',  'Alarucha',
];



function containsA() {
  // escreva seu código aqui
  // return names.reduce((totalOfA, currentWord) => totalOfA + currentWord.match(/Aa/g).length, 0);
  return names.reduce((totalOfA, currentWord) => {
    return totalOfA + currentWord.match(/a/ig).length;
  }, 0);
}

assert.deepStrictEqual(containsA(), 20);