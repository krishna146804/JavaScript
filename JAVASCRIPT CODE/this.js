const krishna={
    name:"krishna",
    job:"developer",
    cource:"BCA",
    Collage:"UNITED",
    age:20,
}

const prabhansh={
    name:"prabhansh",
    job:"cloud enginner",
    cource:"BCA",
    friend:function(name){
        console.log(`He is a good ${this.job} and done the all work before the date so ${this.name} is famous and recommended our  as a HR `)
        console.log(`${name} has done his work`)
    }
}
prabhansh.friend("priyanshu")
prabhansh.friend.call(krishna,"priyanshu")
prabhansh.friend("priyanshu")