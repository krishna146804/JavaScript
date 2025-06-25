function dobBot(dob){
    let dobString= new Date(dob)
    let presentDate= new Date() 
    if (dobString>presentDate){
        return "invalid Date"

    } else{
        return " valid Date"
    }
}

console.log(dobBot("2025-2-15"))
console.log(dobBot("2025-2-20"))

