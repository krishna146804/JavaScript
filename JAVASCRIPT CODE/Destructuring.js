/*
[1,2,3]//this value 1,2,3 should be assign to three different vaiables a,b and c
let [a,b,c]=[1,2,3]
console.log(c)

//result=3
*/
/*
const [a,b,c,d]=[1,2,3,[4,5,6]]
console.log(d)
console.log(d[1])
*/

// result=[4,5,6]
// result=5

/*

const obj={ 
    name:"krishna",
    age:99,
    salary:10,

}

let { name,age,salary}=obj
console.log(age)
//result=99
*/
const obj={
    name:"krishna",
    age:99,
    salary:10,
    addres:{
        city:"bangalore",
        state:"karnatak",
        country:"INDIA",
    }
}
let {addres:{country}}=obj
console.log(country)

//result=INDIA