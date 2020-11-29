// Faça uma pirâmide com n asteriscos de base que seja vazia no meio. Assuma que o valor de n será sempre ímpar:
let n = 9;
let halfN = Math.ceil(n/2);

for (indexOfN = 0 ; indexOfN < halfN ; indexOfN += 1) {
  let asterisks = '';
  for (indexOfAsterisks = 1 ; indexOfAsterisks <= n ; indexOfAsterisks += 1) {
    if (indexOfN === halfN - 1) {
      asterisks += '*';
    } else {
      if (indexOfAsterisks == (halfN - indexOfN) || indexOfAsterisks === (halfN + indexOfN)) {
        asterisks += '*';
      } else {
        asterisks += ' ';
      }
    }
  }
  console.log(asterisks);
}
