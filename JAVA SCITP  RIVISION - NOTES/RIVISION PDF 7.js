// Call, Bind & Apply.
// General Doubts.

// Simple Functions

// function sayName(fname, lname){
//     console.log(`Hii, your name is ${fname + lname}`);
// }

// sayName("Mithun", " S")

// Call

// this: Point of view

// const student = {
//     fname: "Mithun",
//     lname: " S",
//     sayName: function(){
//         console.log(`Hii your name is ${fname + lname}`);
//     }
// }

// const anotherStudent = {
//     fname: "Vivek",
//     lname: " Sharma"
// }

// function sayName2(fname, lname){
//     console.log(`Hii, your name is ${fname + lname}`);
// }

// sayName2(student.fname, student.lname)

// function sayName3(person){
//     const {fname, lname} = person
//     console.log(`Hii, your name is ${fname + lname}`);
// }

// sayName3(student)

const student = {
    fname: "Mithun",
    lname: " S",
    sayName: function(fname, lname){
        console.log(`Hii your name is ${fname + lname}`);
    },
    sayNameInPOV:  function(){
        console.log(`Hii your name is ${this.fname + this.lname}`);
    },
    sayNameInPOVWithOtherParameters: function(greet){
        console.log(`${greet} your name is ${this.fname + this.lname}`);
    },
}

const anotherStudent = {
    fname: "Vivek",
    lname: " Sharma"
}

// student.sayName(anotherStudent.fname, anotherStudent.lname)
// student.sayName(student.fname, student.lname)

// Call: immediately invokes a function with POV
student.sayNameInPOV.call(student)
student.sayNameInPOV.call(anotherStudent)

// bind: Will return a function
const binedFunction1 = student.sayNameInPOV.bind(student)
const binedFunction2 = student.sayNameInPOV.bind(anotherStudent)
binedFunction1()
binedFunction2()

// apply: immediately invokes a function, extra parameters can be passed as an array
student.sayNameInPOVWithOtherParameters.call(student, "Hello")
student.sayNameInPOVWithOtherParameters.apply(student, ["Hello"])