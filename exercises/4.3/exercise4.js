let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let sumOfNumbers = 0;

for ( let indexNumbers = 0 ; indexNumbers < numbers.length ; indexNumbers += 1) {
  sumOfNumbers = sumOfNumbers + numbers[indexNumbers];
}

if (sumOfNumbers/numbers.length > 20) {
  console.log('valor maior que 20');
} else {
  console.log('valor menor ou igual a 20');
}
