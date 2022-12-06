//Primitives:number,string,boolean
//more complex:array,objects
//function, parameter

//Primitives

let age: number;

age = 12;

let userName: string;

userName = "Max";

let isInstructor: boolean;

isInstructor = true;

//more complex

let hobbies: string[];
//number[],boolena[]

hobbies = ["Sports", "Cooking"];

//alias
type Person = {
  name: string;
  age: number;
};

let person: Person = { name: "Max", age: 12 };

//person = { isEmployee: true };

//this is an array storing bunch of objects
let people: Person[];

//type inference + union
let course: string | number = "React--the complete guide";

course = 123;

//functions and type

function add(a: number, b: number) {
  return a + b;
}

//no return anything, called void
function printOutput(value: any) {
  console.log(value);
}
