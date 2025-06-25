[1,2,3]   // This values, 1,2,3 should be assigned to three different variables a,b and c 

/** 
let [a,b,c,d] = [1,2,3]

console.log(d) **/

/** 
const [a,b,c,[d,e,f]] = [1,2,3,[4,5,6]]

console.log(d)
console.log(d[1]) **/

const obj = {
    name : "Vishwa",
    age : 99,
    salary : 10,
    address : {
        city : "Bangalore",
        state : "Karnataka",
        country : "India"
    }
}

let{address : {country}} = obj
console.log(country)

let {salary,name,age} = obj

console.log(age)
console.log(name)
console.log(salary)