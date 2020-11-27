let numbers = [-5, -9, -3, -19, -70, -8, -100, -2, -35, -27];
let maxOfNumbers = numbers[0];

for ( let indexNumbers = 1 ; indexNumbers < numbers.length ; indexNumbers += 1) {
  if (numbers[indexNumbers] > maxOfNumbers) {
    maxOfNumbers = numbers[indexNumbers];
  }
}
console.log('O maior número é: ' + maxOfNumbers);
