// Recordé um atalho para definir um tipo de objeto com um tipo de chave e um tipo de valor específicos.
const nameAgeMap: Record<string, number> = {
  'Alice': 21,
  'Bob': 25
};

// Parameters extrai os tipos de parâmetro de um tipo de função como uma matriz.
type PointPrinter = (p: { x: number; y: number; }) => void;
const point1: Parameters<PointPrinter>[0] = {
  x: 10,
  y: 20
};

// Return Typeextrai o tipo de retorno de um tipo de função.
type PointGenerator = () => { x: number; y: number; };
const point2: ReturnType<PointGenerator> = {
  x: 10,
  y: 20
};

// Exclude remove tipos de uma união.
type Primitive = string | number | boolean
const value: Exclude<Primitive, string> = true; // a string cannot be used here since Exclude removed it from the type.

interface Car {
  make: string;
  model: string;
  mileage?: number;
}
// Required altera todas as propriedades em um objeto para serem necessárias.
let myCar: Required<Car> = {
  make: 'Ford',
  model: 'Focus',
  mileage: 12000 // `Required` forces mileage to be defined
};

const todo: Readonly<Todo> = {
  title: 'Assistir Dark de novo',
  description: 'Relembrar os detalhes',
  completed: false,
}

type Todo = {
  title: string;
  description: string;
  completed: boolean;
}
console.log(todo)
// todo.completed = true // nao aceita 
// Partial altera todas as propriedades em um objeto para serem opcionais.
function updateTodo(todo: Todo, fieldsToUpdate: Partial<Todo>) { // add Partial
  return { ...todo, ...fieldsToUpdate }
}


const todo2: Todo =  updateTodo(todo, { completed: true })

console.log(todo2)

// Pick
type TodoPreview = Pick<Todo, 'title' | 'completed'> // seleciona propriedade do type

const todo3: TodoPreview = {
  title: 'Fechar Ghost of Tsushima',
  completed: false
}

// Omit 
type TodoPreview2 = Omit<Todo, 'description'> // seleciona propriedade para omitir

const todo4: TodoPreview2 ={
title: 'Fechar Ghost of Tsushima',
  completed: false
}
console.log(todo4)