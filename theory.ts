/*  0  */
/*
TypeScript uses compile time type checking --> means it checks if the specified types match before running the code, not while running the code.
*/

// Arrays in Ts
const names: string[] = [];
names.push("Github@Vb10"); // no error
// names.push(5); // Error: Argument of type 'number' is not assignable to parameter of type 'string'.




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
