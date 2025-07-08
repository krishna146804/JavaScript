// HIGHER OREDR FUNCTION

// GIVE THE FUNCTION AS AN ARGUMENT
function calculator (operator,a,b){
    return operator(a,b);
}

console.log(calculator((a,b)=>a+b,5,10)); 

//output:15

//RETURN THE FUNCTION TO  THE FUNCTION

function getMeGreetFun(){
    return (message)=>(console.log(`hello ${message}`));
}

getMeGreetFun()(("how are you ?"));

//output: hello how are you?

//  CALL BACK FUNCTION

function calculator (fn,a,b){
    return fn(a,b);
}

console.log(calculator((a,b)=>a+b,5,6));

//output : 11


// FUNSTION COMPOSITION

const twice = x => x*2;
const square = x => x*x; 

const  compose = (fn1 ,fn2) => (value) => fn1(fn2(value));

console.log(compose(square,twice)(5));

//output:  100


function calculateMatches(isMatch){
    other_person_match_interest = ["L","M","L","r","L","L","r","L"]
    for (i of other_person_match_interest){
        if (isMatch(i)){
            console.log("Yayy , I got a match")
        }
    }
}

calculateMatches((m)=>m=='r')