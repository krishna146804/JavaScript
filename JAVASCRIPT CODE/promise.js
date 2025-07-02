/*

// IF WE HAVE ONLY ONE PROMISES THEN { "WHEN TRUE EXECUTE RESOLVE PART " OR "WHEN FALSE EXECUTE REJECT PART"} 

const getPromisess= new Promise ((resolve,reject)=>{
   let parent=true;
  setTimeout(()=>{
    if(parent){
      resolve("papa is ready for marriage");
    }
    else{
      reject("papa is searched new IAS officer");
    }
  },3000)
})

console.log("i am ready to spoil everything");

getPromisess.then((message)=>{
  console.log(`papa likes  you so  ${message}`);
  console.log("Ghodi par chadne ke liye taiyar ho jao");
}).catch((mes)=>{
  console.log(`papa does not like you so ${mes}`);
  console.log("you search anyone on tinder");
})
  */






// IF WE HAVE MORE THAN ONE PROMISE THEN {"ALL PROMISE IS TRUE THEN EXECUTE RESOLVE PART" OR "ANY ONE IS FALSE THEN EXECUTE REJECT PART"}

/*

const getPromises1 = new Promise ((resolve,reject)=>{
  setTimeout(()=>{
    if (Math.random()>0.5){
      resolve(" Dost 1  is ready for marriage");
    }
    else{
      reject(" Dost 1 is not ready for marriage");
    }
  },3000)
})

const getPromises2 = new Promise ((resolve,reject)=>{
  setTimeout(()=>{
    if (Math.random()>0.5){
      resolve(" Dost 2 is ready for marriage ")
    }
    else{
      reject(" dost 2 is not ready for marriage");
    }
  },1000)
})

const getPromises3 = new Promise ((resolve,reject)=>{
  setTimeout(()=>{
    if (Math.random()>0.5){
      resolve(" Dost 3 is ready for marriage");
    }
    else{
      reject(" Dost 3 is not ready for marriage");
    }
  },2000)
})


const friendPromises = [getPromises1, getPromises2, getPromises3];

Promise.all(friendPromises).then((message)=>{
  console.log(message);
  console.log (" All friend are ready for marriage so Prabhansh is very happy for his marriage");
}).catch((message)=>{
  console.log(message);
  console.log(" All friend are not ready for marriage so Prabhansh is very sad for his friends");
})
  **/





// IF WE HAVE MORE THEN {ONE PROMISES THEN "ANY ONE PROMISES IS TRUE OR ALL PROMISES IS TRUE THEN EXECUTE RESOLVE PART" OR "ALL PROMISES IS FALSE THEN EXECUTE REJECT PART "}

const gfPromises1 = new Promise ((resolve,reject)=>{
  setTimeout(()=>{
    if (Math.random()>0.5){
      resolve("gf 1  is ready for marriage");
    }
    else{
      reject(" gf 1 is not ready for marriage");
    }
  },3000)
})

const gfPromises2 = new Promise ((resolve,reject)=>{
  setTimeout(()=>{
    if (Math.random()>0.5){
      resolve(" gf 2 is ready for marriage ")
    }
    else{
      reject(" gf 2 is not ready for marriage");
    }
  },1000)
})

const gfPromises3 = new Promise ((resolve,reject)=>{
  setTimeout(()=>{
    if (Math.random()>0.5){
      resolve(" gf 3 is ready for marriage");
    }
    else{
      reject(" gf 3 is not ready for marriage");
    }
  },2000)
})


const gfPromises = [gfPromises1, gfPromises2, gfPromises3];

Promise.any(gfPromises).then((message)=>{
  console.log(message);
  console.log(" yayy I am going on date");
}).catch((message)=>{
  console.log(message);
  console.log(" I am not going on date");
})
