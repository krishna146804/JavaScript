/*
function outerFunction(){
  let outervar ="I am outer variable";
  function innerFunction(){
    console.log(outervar);
  }
  return innerFunction;
}
outerFunction()(); //  print "I am outer variable"
const fn=outerFunction();
fn(); // print " I am outer variable"

*/

// use for the encapsulation 

function customerCounter(){
  let count = 0;
  return function (){
    count++;
    console.log("new customer count",count);
  }
}

const counter=customerCounter();
counter(); // first customer count 1
counter();// second customer count 2
counter();// third customer count 3
