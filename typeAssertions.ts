// condicional
const body1 = document.querySelector("body");
if(body1) body1.innerHTML = "carro"

// type assertion
const body2 = document.querySelector("body") as HTMLBodyElement;

const input = document.querySelector(".input") as HTMLInputElement;


//classes
export class Empresa {
  public readonly nome: string; // public não necessário
  private readonly colaboradores: Colaborador[] =[]
  protected readonly cnpj: string;

  constructor(nome: string, cnpj: string) {
    this.nome = nome
    this.cnpj = cnpj
  }
  adicionarColaborador( colaborador: Colaborador):void {
    this.colaboradores.push(colaborador)
  }
  mostrarColaborador( ):void {
    for(const colaborador of this.colaboradores)
    console.log(colaborador)
  }
}

  export class Colaborador {
    constructor( public readonly nome:string, public readonly sobrenome: string) {


  }
}

const empresa1 = new Empresa("Udemy", "11.111.111/0001-01")
const colaboradores1 = new Colaborador("Luiz", "Otávio")
const colaboradores2 = new Colaborador("Celso", "Tavares")
const colaboradores3 = new Colaborador("Carlos", "Alberto")
empresa1.adicionarColaborador(colaboradores1)
empresa1.adicionarColaborador(colaboradores2)
empresa1.adicionarColaborador(colaboradores3)
console.log(empresa1)
empresa1.mostrarColaborador()