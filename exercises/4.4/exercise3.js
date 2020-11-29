// Agora inverta o lado do triângulo.
let n = 5;

for (indexOfN = 0 ; indexOfN < n ; indexOfN += 1) {
  let asterisks = '';
  for (indexOfAsterisks = 1 ; indexOfAsterisks <= n ; indexOfAsterisks += 1) {
    if (indexOfAsterisks >= (n - indexOfN)) {
      asterisks += '*';
    }else {
      asterisks += ' ';
    }
  }
  console.log(asterisks);
}
