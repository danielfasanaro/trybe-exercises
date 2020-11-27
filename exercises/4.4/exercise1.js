// Para o primeiro exercício de hoje, faça um programa que, dado um valor n qualquer, seja n > 1 , imprima na tela um quadrado feito de asteriscos de lado de tamanho n.
let n = 10;
asterisk = '';
for (let indexN = 0 ; indexN < n ; indexN += 1) {
  asterisk += '*';
}
for (let indexN = 0 ; indexN < n ; indexN += 1) {
  console.log(asterisk);
}
