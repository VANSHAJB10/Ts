/*  0  */
/*
TypeScript uses compile time type checking --> means it checks if the specified types match before running the code, not while running the code.
*/

// Arrays in Ts
const names: string[] = [];
names.push("Github@Vb10"); // no error
// names.push(5); // Error: Argument of type 'number' is not assignable to parameter of type 'string'.

const names: readonly string[] = ["Dylan"];
names.push("Jack"); // Error: Property 'push' does not exist on type 'readonly string[]'.
// The readonly keyword can prevent arrays from being changed.

const numbers = [1, 2, 3]; // inferred to type number[]
numbers.push(4); // no error
// comment line below out to see the successful assignment
numbers.push("2"); // Error: Argument of type 'string' is not assignable to parameter of type 'number'.
let head: number = numbers[0]; // no error
//TypeScript can infer the type of an array if it has values.



/*  1  */
/*
When creating a variable, there are two main ways TypeScript assigns a type:

Explicit
Implicit

Explicit - writing out the type.
Explicit-type assignments are easier to read and more intentional.

Implicit - TypeScript will "guess" the type, based on the assigned value.
Implicit assignment forces TypeScript to infer the value.
Implicit-type assignments are shorter, faster to type, and often used when developing and testing.

!!
Having TypeScript "guess" the type of a value is called infer.


*/

let firstName: string = "Vanshaj";      //Explicit

let firstName = "Vanshaj";              //Implicit
