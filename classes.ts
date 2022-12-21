// abstract class UserAccount { // nao permite criar objetos com a classe
class UserAccount {
  public name: string; // public livre
  protected age: number; // so pode ser acessada dentro da classe ou sub classe

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  get getLevel() {
    console.log("-----Get-----");
    return this.name;
  }
  logDetails(): void {
    console.log(`The player ${this.name} is ${this.age} years old`);
  }
}

class CharAccount extends UserAccount {
  private nickName: string; //com private so poder ser acessado dentro da classe
  level: number; //com readonly propriedade so pode ser lida

  constructor(name: string, age: number, nickName: string, level: number) {
    super(name, age);

    this.nickName = nickName;
    this.level = level;
  }
  set setLevel(level: number) {
    this.level = level;
  }
}

const Dados = new UserAccount("Celso", 30);
//console.log(Dados.age); // com protected
Dados.logDetails();

const John = new CharAccount("John", 45, "johmaster", 80);
console.log(John.getLevel);
John.setLevel = 999;

console.log(John);
