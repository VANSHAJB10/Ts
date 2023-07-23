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

JS - executions starts line by line 
TS - Ts never runs the code ... only goal is to make sure all the types are right , fit to be converted to Js and then converts into Js code.
