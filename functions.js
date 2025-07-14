//function defination
function name(){
    console.log("priti ugale");
}
name();
//paramaterise function


// function add(num1,num2){
//     let result=num1+num2
//     console.log(result)
// }
// add(2,3)
// let sum=add(2,3) //its not return any value 
// console.log(sum)

function add(num1,num2){
    return num1+num2
}
let sum=add(2,3)
console.log(sum);

function userlogin(username){
    return `${username} just loggedIn`
}
console.log(userlogin("priti"))

//if user forget to enter username
function userlogin(username){
    if(username==undefined){
        console.log("please enter username:")
        return
    }
    return `${username} just loggedIn`
}
console.log(userlogin())


//before rest operator
// function calculateCartPrice(num1){
//     return num1
// }

// console.log(calculateCartPrice(20,30,40))

//... is rest operator which takes all the values ex.

function calculateCartPrice(...num1){
    return num1
}

console.log(calculateCartPrice(20,30,40))

let person={
    name:"priti",
    age:21
}
//handling objects through functions
function handleobject(anyobject){
    return `person name is ${anyobject.name} and age is ${anyobject.age}`
}
console.log(handleobject(person));

handleobject({
    name:"priti",
    age:21

})

//handling array through functions

const fruits=["banana", "apple","grapes","papaya"];
 function favfruits(getfruit){
    return getfruit[3]
 }
//  favfruits(fruits) isueeee
 console.log(favfruits(fruits))
