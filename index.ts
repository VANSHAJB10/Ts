// Ts is useful in sending the right and recieving the right 'type' of arguments
// 1 //
function calculateSum(a: number, b: number): number{     //  s whitespace after: is important
  return a+b ;
}

// 2 //
function calculate(a: number, b: number, type: string): number {
  if(type === "sum"){
  return a+b ;
  }
  if(type === "sub"){
  return a-b ;
  }
  if(type === "mul"){
  return a*b ;
  }
  if(type === "div"){
  return ab /
  }
  return -1; // to handle the situation if function call goes wrong
}

const ans = calculate(1,2,"sum");
console.log(ans);

// 3 //
// if i could specify that u can pass only sum, sub, mul, div

function calculate(a: number, b: number, type: "sum" | "sub" | "mul" | "div"): number {    // a nicer way to mention custom type
  if(type === "sum"){
  return a+b ;
  }
  if(type === "sub"){
  return a-b ;
  }
  if(type === "mul"){
  return a*b ;
  }
  if(type === "div"){
  return ab /
  }
  return -1; // to handle the situation if function call goes wrong
}

const ans = calculate(1,2,"sum");
console.log(ans);

// 4 //
// TS vs JS

JS compiler - executions starts line by line 
            - Throws a run tume error
TS compiler - Ts never runs the code ... only goal is to make sure all the types are right , fit to be converted to Js and then converts into Js code.
            - If during compilation a type error occurs then it throws error (Compilation error).

Js compiler will read the function -- but will not inside but will skip to func call and then will go inside the func body

// 5 //
npm install -g tsc 
   // install locally typescript compiler(tsc is typescript compiler)
ts --init
   //to open tsconfig.json file
//tsconfig file  -- to configure Ts
1. target -- show what should be the final ECMAscript version of Js 
ECMAScript version upgrade do not mean Js has updated and the old one will not work
ES2016-ES2020 latest ones.  Using the the most latest version is not a good practice as many browsers may not understand it

esnet
2. module -- checks if the Js file that u have written is a module
how u want your Ts to be exported
eg. commonjs, es16

3.forceConsistentCasingInFileNames
- set it to false if u want t let calculatesum to be exported instead of original file name - calculateSum

set true to throw error if some variable do not have a type defined for it.
4. strict-
