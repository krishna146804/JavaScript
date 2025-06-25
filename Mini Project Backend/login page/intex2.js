//ADMISSION MANAGEMENT SYSTEM MINI PROJECT
const student=[]

function listOfStudent(){
    return student
}

function addStudent(name){
    student.push(name)
    return `student ${name} successfully added`
}

function removeStudent(name){
    // task:- find index of the element to be removed => indexOf
    let elementIndex=student.indexOf(name)

    // to remove the element from that  index => splice
    student.splice(elementIndex,1)

    // to print something
    return `student ${name} remove successfully`
}

console.log(listOfStudent())
console.log(addStudent("murali"))
console.log(addStudent("krishna"))
console.log(listOfStudent())
console.log(removeStudent( "murali"))
console.log(listOfStudent())
