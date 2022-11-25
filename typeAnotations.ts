
//number
let numero: number = 2;
//string
let casa: string = 'mesa'
 //array
let itensCarro: string[]= ['bancos', 'volante']
let numeros: Array<number> = [1, 2, 3]
// tuple
let title: [number, number, string] = [2, 5, 'casa']
console.log(title)
// enum
enum Colors {
  white = '#fff',
  black = '#000'
}
//any // qualquer coisa
let coisa: any

// void // vazio
function logger() {
  console.log('foo')
}
// null | undefined
type Bla = string |	undefined
// never
throw new Error('Erro')
// object
let cart: object
cart = {
nome: 'Celso'
}
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


