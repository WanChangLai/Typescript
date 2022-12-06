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

//object
let person: {
  name: string;
  age: number;
};

person = { name: "Max", age: 12 };

//person = { isEmployee: true };

//this is an array storing bunch of objects
let people: {
  name: string;
  age: number;
}[];

//type inference + union
let course: string | number = "React--the complete guide";

course = 123;
