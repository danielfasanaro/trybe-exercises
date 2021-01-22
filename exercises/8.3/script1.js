
const assert = require('assert');

const arrays = [
    ["1", "2", "3"],
    [true],
    [4, 5, 6]
];


function flatten() {
  // escreva seu código aqui
  // return arrays.reduce((total, currentValue) => {
  //   currentValue.forEach(function(values) {
  //     this.push(values);
  //   }, total)
  //   return total;
  // }, []);
  return arrays.reduce((result, currentValue) => {
    return result.concat(currentValue);
  });
}

assert.deepStrictEqual(flatten(), ["1", "2", "3", true, 4, 5, 6]);