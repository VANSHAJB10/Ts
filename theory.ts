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
