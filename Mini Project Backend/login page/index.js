var admin={
    email : "ajeet123",
    password : "1234"
}

function login(email,password){
    if(email==admin.email && password==admin.password){
        return "login successful"
    }
    else if(email==admin.email && password!=admin.password){
        return "password mismatch"
    }
    else{

        return "invalid"
    }
}

console.log(login("ajeet123","1234"));
console.log(login("ajeet123","123"));
console.log(login("jeet123","124"));