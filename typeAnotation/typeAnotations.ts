
//number
let numero: number = 2;
//string
let casa: string = 'mesa'
 //array
let itensCarro: string[]= ['bancos', 'volante']
// boolean
let verdade: boolean = true;
// objeto
let carro: {
  nome: string;
  ano: number;
  preco: number;
};
carro = { nome: 'Toyota Yaris Sedan XS', ano: 2019, preco: 80000 };
// ==> Functions [Type Annotation]
function multiplicarNumero(num1: number, num2: number) {
  return num1 * num2;
}
console.log(multiplicarNumero(2, 5));

// type Annotation