// Hollow Square Pattern

/*2*/
function printSingleFullRow(n){   // to print the first row of *
  var str =""; //emty string
  for(var i= 0; i<n ; i++){
    str = str + "*";
  }
  console.log(str);
}

/*3*/
function printPartialRow(n){// to print -->   *    *
    var str ="";
    str = str + "*";    // to print a star in front of spaces
    for(var i= 0; i<n-2 ; i++){
        str = str + " "
      }
      str += "*"; // to print a star at end of spaces
      console.log(str);
}


/*1*/ 
function starypattern(n){

 /*4*/   
    printSingleFullRow(n);  // to print the topmost line
    for(var i=0; i<n-2; i++){   // to call the partialRow function n - 2 times. 
        printPartialRow(n);//not passing n-2 but n beacuse the loop is running n-2 times
    }
    printSingleFullRow(n);  // to print bottommost line
 /*4 end*/   
}

starypattern(10);
