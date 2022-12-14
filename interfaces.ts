interface Game { //vem do java e C# que usa o Inome (I antes do nome)
title: string;
description: string;
genre: string;
platform?: string[];
getSimilars?: (title: string) => void
}

const tlou: Game = {
title: 'The Last of Us',
description: 'The best game in the world',
genre: 'Action',
platform: ['PS3', 'PS4'],
getSimilars: (title: string) => {
  console.log(`Similas games to ${title}: Uncharted, A Plague Tale, Metro`)
}
}
interface DLC extends Game {
  originalGame: Game,
  newContent: string[]

}
const leftbehind: DLC = {
  title: 'The Last of Us - Left Behind',
  description: 'You play as Ellie before the orginal game',
  genre: 'Action',
  platform: ['PS4'],
  originalGame: tlou,
  newContent: ['3 hours story', 'new characters']
}

class CreateGame implements Game {
  title: string;
  description: string;
  genre: string;
  
  constructor(t: string, d: string, g:string) {
  this.title = t
  this.description = d
  this.genre = g
}

}

if(tlou.getSimilars){
  tlou.getSimilars(tlou.title)
}