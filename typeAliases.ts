// type alias
type Uid = number | string | undefined

type Uid1 = number & string & undefined

interface TipoNome { nome: string }
interface TipoSobrenome { sobrenome: string }
interface TipoIdade { idade: number }

type Pessoa1 = TipoNome & TipoSobrenome & TipoSobrenome
interface Pessoa2 extends TipoNome, TipoSobrenome, TipoSobrenome {}


function logDetails(uid: Uid, item: string) {
  console.log(`A product with ${uid} has a title as ${item}.`)
}

function logInfo(uid: Uid, user: string) {
  console.log(`An user with ${uid} has a name as ${user}.`)
}

type Platform = 'Windows' |  'Linux' | 'Mac OS' | 'ios'

function renderPlatform(platform: Platform) {
 return platform
}

renderPlatform('ios')

logDetails(123, 'sapato')
logDetails('123', 'sapato')

logInfo(123, 'Celso')
logInfo('123', 'Celso')