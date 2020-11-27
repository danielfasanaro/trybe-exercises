let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let minOfNumbers = numbers[0];

for ( let indexNumbers = 1 ; indexNumbers < numbers.length ; indexNumbers += 1) {
  if (numbers[indexNumbers] < minOfNumbers) {
    minOfNumbers = numbers[indexNumbers];
  }
}
console.log('O menor número é: ' + minOfNumbers);
