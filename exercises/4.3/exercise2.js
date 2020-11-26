let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let sumOfNumbers = 0;

for ( let indexNumbers = 0 ; indexNumbers < numbers.length ; indexNumbers += 1) {
  sumOfNumbers = sumOfNumbers + numbers[indexNumbers];
}

console.log('A soma dos números do array é: ' + sumOfNumbers);