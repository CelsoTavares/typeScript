// Transmitindo com as
//Uma maneira direta de converter uma variável é usando a palavra- aschave, que mudará diretamente o tipo da variável especificada.
let x: unknown = 'hello';
console.log((x as string).length);

//Na verdade, a conversão não altera o tipo dos dados dentro da variável, por exemplo, o código a seguir não funciona como esperado, pois a variável xainda contém um número.
let x1: unknown = 4;
console.log((x1 as string).length); // prints undefined since numbers don't have a length

// Transmitindo com<>
//Usar <> funciona da mesma forma que lançar com as.
let x2: unknown = 'hello';
console.log((<string>x2).length);

// Conjuração forçada
// Para substituir erros de tipo que o TypeScript pode lançar ao converter, primeiro converta para unknown, depois para o tipo de destino.

let x3 = 'hello';
//console.log(((x3 as unknown) as number).length); // x is not actually a number so this will return undefined