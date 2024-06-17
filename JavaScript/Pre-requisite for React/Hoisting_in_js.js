// Normal flow of Js program

// let x = 7;
// function func1() {
//   console.log("this is a function 1");
// }
// console.log(x);
// func1();

func1();
// console.log(x);  this will give an error as we are using variable before even declaring.
const x = 10;
function func1() {
  console.log("this is a function 1");
}

// hoisting is a concept of refering the declaration at top-level but not the implementation
// Hoisting is different with different keywords
// with var hoisting is supported and it gives value undefined to the hoisted variable
// function expressions are not hoisted eg. arrow functions, callback functions
// let and const will give us error if tried to hoisted.
