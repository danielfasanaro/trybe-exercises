// Agora inverta o lado do triângulo.
let n = 10;
let halfN = Math.ceil(n/2);

for (indexOfN = 0 ; indexOfN < halfN ; indexOfN += 1) {
  let asterisks = '';
  for (indexOfAsterisks = 1 ; indexOfAsterisks <= n ; indexOfAsterisks += 1) {
    if (indexOfAsterisks >= (halfN - indexOfN) && indexOfAsterisks <= (halfN + indexOfN)) {
      asterisks += '*';
    } else {
      asterisks += ' ';
    }
  }
  console.log(asterisks);
}
