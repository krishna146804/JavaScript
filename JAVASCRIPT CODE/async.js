// setTimeout 

console.log('hello from the begining')

setTimeout(()=>{
    console.log("hello from the call back function")

},3000)

console.log("hello from  the end")

// setInterval

console.log('hello from the begining')

setInterval(()=>{
    console.log("hello student") 

},2000)

console.log('hello from end')

//clearInterval

console.log('hello from the begining')
id=setInterval(()=>{
    console.log('hello student')
    clearInterval(id)// it will stop the interval job
},2000)


