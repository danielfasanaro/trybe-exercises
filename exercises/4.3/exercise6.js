let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let oddInNumbers= 0;

for (let indexNumbers = 0 ; indexNumbers < numbers.length ; indexNumbers += 1) {
  if (numbers[indexNumbers] % 2 != 0) {
    oddInNumbers += 1;
  }
}
if (oddInNumbers > 0) {
  console.log('Existem ' + oddInNumbers + ' números ímpares no array.')
} else {
  console.log('Nenhum valor ímpar encontrado.')
}
