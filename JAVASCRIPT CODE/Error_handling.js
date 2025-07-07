/*
// syntex error
console.log("hello)
    
    //result= syntex error generate
    */
//runtime error

/*

let x=5;
console.log(x.toUppercase())
*/
//result= generate the runtime error

//using try,catch

console.log(" I am at the first line")
try{
    let x=5;
    console.log(x.toUpperCase())
}catch(error){
    console.log("Error has been handled please proced")

}finally{
    console.log("I will get invoked always")
}
console.log("I am at the last line")



