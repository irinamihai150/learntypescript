//union types are used when a value can be more than a single type
// using the | we are saying our parameters is a string or number
//tsc.cmd uniontypes.ts ; if ($?) { node uniontypes.js }

// function printStatusCode(code: string | number) {
// 	console.log(`My status code is ${code}.`)
// }
// printStatusCode(404)
// printStatusCode("404")

//union type errors- you need to know when union types are being used to avaoid errors

// function printStatusCode(code: string | number) {
//   console.log(`My status code is ${code.toUpperCase()}.`) // error: Property 'toUpperCase' does not exist ontype 'string | number'.
//   Property 'toUpperCase' does not exist on type 'number'
// }

//Typescript functions
//typescript  has a specific syntax for typing function parameters and return values

// the `: number` here specifies that this function returns a number
// function getTime(): number {
//   return new Date().getTime();
// }
// console.log(getTime());

//if no return type is defined,typescript will attempt to infer it throught the types of the variables or expression returned

//Void return type

//the type void can be used to indicate a function doesn't return any value

function printHello(): void {
	console.log("Hello!")
}

//parameters

function multiply(a: number, b: number) {
	return a * b
}

// If no parameter type is defined, TypeScript will default to using any, unless additional type information is available as shown in the Default Parameters and Type Alias sections below.

//optional parameters
// by default typescript will assume all paramers are required, but they can be marked as optional
// the `?` operator here marks parameter `c` as optional
//example

// function add(a: number, b: number, c?: number) {
// 	return a + b + (c || 0)
// }

// console.log(add(2,3,4))

//default parameters
// for parameters with default values, the default values goes after the type annotation

// function pow (value:number,exponent:number=10){
//   return value**exponent
// }

//named parameters
// Typing named parameters follows the same pattern as typing normal parameters.

// function divide({ dividend, divisor }: { dividend: number; divisor: number }) {
// 	return dividend / divisor
// }

//rest parameters => can be typed like normal parameters, but the type must be an array as rest parameters are always arrays.

// function add(a: number, b: number, ...rest: number[]) {
// 	return a + b + rest.reduce((p, c) => p + c, 0)
// }

//type alias=> funtion types can be specified separately from function parameters with type aliases, these types are written similarly to arrow functions

//example:
type Negate = (value: number) => number

// in this function, the parameter `value` automatically gets assigned the type `number` from the type `Negate`
const negateFunction: Negate = (value) => value * -1;

//typescript Casting => 
// There are times when working with types where it's necessary to override the 
// type of a variable, such as when incorrect types are provided by a library.

// Casting is the process of overriding a type.
// Casting with as
// A straightforward way to cast a variable is using the as keyword, which will directly change the type of the given variable
let x: unknown = "hello"
console.log((x as string).length)

// Casting doesn't actually change the type of the data within the variable, for example the following code will not work as expected since the variable x is still holds a number.
// let x: unknown = 4;
// console.log((x as string).length); // prints undefined since numbers don't have a length


// TypeScript will still attempt to typecheck casts to prevent casts that don't seem correct, for example the following will throw a type error since TypeScript knows casting a string to a number doesn't makes sense without converting the data:
// console.log((4 as string).length); // Error: Conversion of type 'number' to type 'string' may be a mistake because neither type sufficiently overlaps with the other. If this was intentional, convert the expression to 'unknown' first.
// The Force casting section below covers how to override this.


// Casting with <>
// Using <> works the same as casting with as.

// Example
// let x: unknown = 'hello';
// console.log((<string>x).length);



// Force casting
// To override type errors that TypeScript may throw when casting, first cast to unknown, then to the target type.
// let x = 'hello';
// console.log(((x as unknown) as number).length); 
// x is not actually a number so this will return undefined

