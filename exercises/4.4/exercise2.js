// Para o segundo exercício, faça o mesmo que antes, mas que imprima um triângulo retângulo com 5 asteriscos de base.
let n = 5;

for (indexOfN = 0 ; indexOfN < n ; indexOfN += 1) {
  let asterisks = '';
  for (indexOfAsterisks = 0 ; indexOfAsterisks <= indexOfN ; indexOfAsterisks += 1) {
    asterisks += '*';
  }
  console.log(asterisks);
}
