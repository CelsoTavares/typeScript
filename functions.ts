// O tipo voidpode ser usado para indicar que uma função não retorna nenhum valor.
function printHello(): void {
  console.log('Hello!');
}
// Os parâmetros de função são digitados com uma sintaxe semelhante às declarações de variáveis.
function multiply(a: number, b: number) {
  return a * b;
}
//Por padrão, o TypeScript assumirá que todos os parâmetros são obrigatórios, mas eles podem ser explicitamente marcados como opcionais.
function add1(a: number, b: number, c?: number) {
  return a + b + (c || 0);
}
//Para parâmetros com valores padrão, o valor padrão vai após a anotação de tipo:
function pow(value: number, exponent: number = 10) {
  return value ** exponent;
}
// A digitação de parâmetros nomeados segue o mesmo padrão da digitação de parâmetros normais.
function divide({ dividend, divisor }: { dividend: number, divisor: number }) {
  return dividend / divisor;
}
// Parâmetros Rest podem ser digitados como parâmetros normais, mas o tipo deve ser um array, já que os parâmetros Rest são sempre arrays.
function add2(a: number, b: number, ...rest: number[]) {
  return a + b + rest.reduce((p, c) => p + c, 0);
}
// Os tipos de função podem ser especificados separadamente das funções com aliases de tipo.
// Esses tipos são escritos de forma semelhante às funções de seta, leia mais sobre funções de seta aqui .
type Negate = (value: number) => number;

const negateFunction: Negate = (value) => value * -1;