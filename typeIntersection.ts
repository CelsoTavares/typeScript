type AccountInfo = {
  id: number,
  name: string,
  email?: string // optional
}

const account: AccountInfo = {
  id: 5,
  name: 'Celso'
}
type CharInfo = {
  nickName: string,
  level: number
}

const char: CharInfo = {
  nickName:'Tavares',
  level: 100
}
//  intersection
type PlayerInfo = AccountInfo & CharInfo 

const player: PlayerInfo = {
  name: 'Celso',
  id: 10,
  nickName: 'Tavares',
  level: 100
 
}