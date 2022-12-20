// function
function soma(x: number, y: number) {
  return x + y;
}

const carro: string = "Ranger"

const objectA: {
  chaveA: string,
  chaveB: string,
  chaveC?: string,
  [Key: string]: unknown    // permite adicionar novo valor ao object
} = {
  chaveA: "Ranger",
  chaveB: "Monza",
}
// array
const casa: number[] = [1, 2, 3, 4, 5, 6, 7]
const casa1: Array<number> = [1, 2, 3, 4, 5, 6, 7]
const multi = casa.map(a => a * 10)

const dadosClient: [number, string, string? ,...number[]] = [10, "Carlos", "Jose", 70, 40]  // tupula
dadosClient[0] = 40

const casa2: Array <string> = ["telhado", "porta"]
const casa3: string[] = ["teto", "garagem"]


type MapStringsCallback = (item: string) => string

export function mapStrings( array: string[], callbackfn: MapStringsCallback,): string[] {
  const newArray: string[] = []

  for(let i = 0; i < array.length; i++) {
    const item = array[i]
    newArray.push(callbackfn(item))
  }
  return newArray
}

const abc = ["a", "b", "c"]
const abcMapped = mapStrings(abc, (item) => item. toUpperCase())
console.log(abc)
console.log(abcMapped)