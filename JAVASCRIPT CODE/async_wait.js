/*
async function printmessage(){
  return "hello student";
}
console.log(printmessage());

printmessage().then(message => console.log(message))
*/

// i want to print hello after 

async function printHelloStudent() {
  let message = await new Promise ((resolve,reject)=>{

    setTimeout(()=>{
      resolve("hello student");
    },2000)
  })
      console.log(message);
    console.log("it is print after hello student");

  
}
console.log("first line");
printHelloStudent()
console.log("last line");