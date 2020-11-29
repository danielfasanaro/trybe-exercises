// Ordene o array numbers em ordem crescente e imprima seus valores;
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for (let indexNumbers = 1; indexNumbers < numbers.length; indexNumbers++) {
  for (let indexNumbers2 = 0; indexNumbers2 < indexNumbers; indexNumbers2++) {
    if (numbers[indexNumbers] < numbers[indexNumbers2]) {
      let storedNumber = numbers[indexNumbers];

      numbers[indexNumbers] = numbers[indexNumbers2];
      numbers[indexNumbers2] = storedNumber;
    }
  }
}
console.log(numbers);