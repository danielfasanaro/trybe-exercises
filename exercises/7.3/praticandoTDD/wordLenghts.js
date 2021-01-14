const assert = require('assert');
// escreva a função wordLengths aqui

const wordLengths = function(myArray) {
  const wordLengthsArray = []
  myArray.forEach(element => {
    wordLengthsArray.push(element.length);
  });
  return wordLengthsArray;
}

const words = ['sun', 'potato', 'roundabout', 'pizza'];
const expected = [3, 6, 10, 5];

assert.strictEqual(typeof wordLengths, 'function');
const output = wordLengths(words);
assert.deepStrictEqual(output, expected);