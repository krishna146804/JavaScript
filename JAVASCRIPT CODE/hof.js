//give argument as a function

function calculator (operator,a,b){
    return operator(a,b)
    console.log("it is provide the result with your accourding")
}

 function sum(a,b){
    return a+b
 }
 const multi=(a,b)=>a*b

console.log(calculator(sum,5,6))//function passed as a argument for addition
console.log(calculator(multi,5,6))//function passed as a agrument for multiplication
console.log(calculator((a,b)=>a+b,5,6))//arrow function addition direct function pass as a argument
console.log(calculator((a,b)=>a*b,5,6))//arrow function mutiplicaion direct function pass as a argument

