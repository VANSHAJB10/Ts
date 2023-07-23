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
