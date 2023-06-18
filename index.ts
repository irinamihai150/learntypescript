// npx tsc --watch   - to continue watching for changes
//  the command npx tsc --watch compiles TypeScript files (.ts) to JavaScript files (.js) and continues to watch for any changes in the TypeScript files. Whenever a change is detected, it automatically recompiles the modified file.

// The --watch flag is used to enable the watch mode, which allows the TypeScript compiler (tsc) to monitor the files for changes. When a file is modified, tsc will recompile only the modified file and any other dependencies affected by the change, improving the development workflow.
//stackoverflow.com/questions/58796490/tsc-ps1-cannot-be-loaded-because-running-scripts-is-disabled-on-this-system -useful resources
// define our tuple
https: let ourTuple: [number, boolean, string]

// initialize correctly
ourTuple = [5, false, "Coding God was here"]

// We have no type safety in our tuple for indexes 3+
ourTuple.push("Something new and wrong")

console.log(ourTuple)
let message: string = "Hello World"
console.log(message)
//typescript has a specific syntax for typing objects.

// const car: { type:string; model: string; year:number }= {
//   type:"Toyota",
//   model:"Corolla",
//   year:2009

// }
// console.log(car);
//typescript can infer the types of properties based on their values
// const car = {
// 	type: "toyota",
// }
// car.type = "ford"
// car.type = 2

//optional properties are properties that don't have to be defined in the object definition -with error
// const car: {
// 	type: string
// 	mileage: number
// } = {
// 	type: "Toyota",

// }
// car.mileage=2000

// example with an optional property - no error
// const car: {
//   type:string,mileage?:number
// }= {type:"toyota"}
// car.mileage=2000

//index signatures can be used for objects without a defined list of properties
//no errors
// const nameAgeMap: {
//   [index:string]:number
//  } = {

//  }
//  nameAgeMap.Jack=25
//errors
// nameAgeMap.Mark = "Fifty"

//typescript enums
// an enum is a special class that represent a group of constants, enums come in two flavors string and numeric
//by default , enums will initialize with a numeric value starting at 0  and incrementing by 1 for each member
// enum CardinalDirection {
// 	North,
// 	East,
// 	South,
// 	West,
// }
// let currentDirection = CardinalDirection.North
// console.log(currentDirection)
// currentDirection = "North"
//error north is not assign name to type "cardinalDirection"
//numeric enums = fully initialized -you can assign unique number values for each enum value, then the values will not increment automatically
// enum StatusCodes {
// 	NotFound = 404,
// 	Success = 200,
// 	Accepted = 202,
// 	BadRequest = 400,
// }
// console.log(StatusCodes.NotFound)
// console.log(StatusCodes.Success);
//string enums -enums can also contain strings, this is more common than numeric enums, because of their readability and intent.
enum cardinalDirection {
	North = "NORTH",
	East = "EAST",
	South = "SOUTH",
	West = "WEST",
}
console.log(cardinalDirection.North)

//Technically, you can mix and match string and numeric enum values, but it is not recommended to do so
//Create an enum called myEnum, with 2 constants (myFirstConst, mySecondConst) with default values:

enum myEnum {
	myFirstConst,
	mySecondConst,
}

console.log(myEnum)
