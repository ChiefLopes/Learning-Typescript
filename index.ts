let id: number = 11;
let me: string = "Lopes";

let food = "rice";
console.log(id, me, food);

if (typeof me === "number") {
  console.log(`${me} is a number`);
} else {
  console.log(`${me} is a string`);
}

const fruits: string[] = ["orange", "apple", "pawpaw"];
const colors: any[] = ["red", 1, 2, "blue", true];

console.log(fruits);
console.log(colors);

//! TUPLE
//* With a tuple, u can specify the types to be contained in an array
const person: [number, string, boolean] = [1, "Ben", true];

console.log(person);

//! TUPLE ARRAY
//* A tuple array shows types that should be contained in an array, and it must be in the order of its declaration or placement
const people: [number, string][] = [
  [1, "Ben"],
  [2, "Betty"],
  [3, "Benny"],
];

console.log(people);

//! UNION
//* When you are not so sure of what a variable should hold or, when a variable is expected to have either one type or another, we use union to specify.

const tag: number | string = "Lopes"; //* THe tag variable, can either contain a number or a string and norhing more than both types specified, unless we want to add another type.

const tag2: number | boolean | string = 23; //* THe tag2 variable, can either contain a number, a string and/or a boolean and nothing more than the types specified,

console.log(tag, tag2);

//! ENUMERATORS OR ENUMS
//* Enums in typescript help us defined a set of named constants that are typically mapped to a numerical value. 
enum days {
  Sunday = 1,
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday
}

let today: any = days[0]
console.log(today);
//* So, enumerators in TypeScript help us give names to numbers, making our code easier to read and understand.```