/**
 * syntax error
 *
console.log("Hello) */

/**
 * Runtime error
 */
/** let x = 5
console.log(x.toUpperCase()) 

let x = 25
let y = 0
let res = x/y
console.log(res) **/

/**
 * Logical error
 */

/**
let i = 5

while(i>=0){
    console.log("Hello Students")
} **/



console.log("I am at the first line")
try{
    let x = "Vishwa"
    console.log(x.toUpperCase())
}catch(err){
    console.log("Error has been handled. Please proceed")
    console.log(err)
}finally{
    console.log("I will get invoked always")
}


console.log('I am at the last line')