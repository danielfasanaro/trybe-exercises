const removeVowels = (word) => {
  const characters = word.split('');
  let results = '';
  let vowels = 0;

  for (let i = 0; i < characters.length; i += 1) {
    if (
      characters[i] === 'a' ||
      characters[i] === 'o' ||
      characters[i] === 'i' ||
      characters[i] === 'e' ||
      characters[i] === 'u'
    ) {
      vowels += 1;
      results += vowels.toString(10);
    } else {
      results += characters[i];
    }
  }
  return results;
};


const parameter = 'Dayane';
const result = 'D1y2n3';

const assert = require('assert');
assert.strictEqual(removeVowels(parameter), result);