let info = {
  personagem: "Margarida",
  origem: "Pato Donald",
  nota: "Namorada do personagem principal nos quadrinhos do Pato Donald",
};
let array = [];
console.log(typeof info);
console.log(array[Symbol.iterator]);
console.log(typeof info[Symbol.iterator])
console.log(typeof array[Symbol.iterator])


// for (let value of info) {
//     // console.log(value);
// }