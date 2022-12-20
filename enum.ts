
//Você pode definir o valor do primeiro enum numérico e incrementá-lo automaticamente a partir disso:
enum CardinalDirections {
  North = 1,
  East,
  South,
  West
};

console.log(CardinalDirections.North);
console.log(CardinalDirections.West);

//Você pode atribuir valores numéricos exclusivos para cada valor de enumeração. Então os valores não serão incrementados automaticamente:
enum StatusCodes {
  NotFound = 404,
  Success = 200,
  Accepted = 202,
  BadRequest = 400
}

console.log(StatusCodes.NotFound);
console.log(StatusCodes[400]);

//Enums também podem conter strings. Isso é mais comum do que enumerações numéricas, devido à sua legibilidade e intenção.
enum CardinalDirections {
  North1 = 'North',
  East1 = "East",
  South1 = "South",
  West1 = "West"
};

console.log(CardinalDirections.North1);
console.log(CardinalDirections.West1);