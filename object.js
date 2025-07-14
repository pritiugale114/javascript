//singleton
//object literals (non singleton object)
const mysym=Symbol("key1"); //for symbol
const stud={
    name: "priti",
    age:21,
    email:"priti@google.com",
    isloggedIn:false,
    location:"pune",
    [mysym]:"mykey1"
   //symbol
}

//accessing object
console.log(stud["name"])//way1
console.log(stud.name)//way2
stud.age=22;  //changing values
// Object.freeze(stud); //freeze is use to lock object so that nobody can chnage it.
console.log(stud)



//functions

stud.greetings=function(){
    console.log("hello js user")
}
stud.greetingstwo=function(){
    console.log(`hello js user,${this.name}`);//this is used to access the  value from the object , to point out the value
}
console.log(stud.greetings());
console.log(stud.greetingstwo());


//singlton object 

const stud=new Object();  //declaration of singleton object 
console.log(stud);
stud.name="priti ugale"
stud.age=21
stud.email="priti@amazon.com"
console.log(stud)

//nested object 
const user={
    email: "priti@infosys.com",
    fullname:{
        userfullname:{
            firstname:"priti",
            lastname:"ugale"
        }
    },
    age:21
}
console.log(user.fullname.userfullname.firstname) //accessing 


//object assign :merging objects
const obj1={a:1,b:2}
const obj2={c:3,d:4}
const obj3=Object.assign({},obj1,obj2) //({}:target, source)
console.log(obj3);

//spread
const objj3={...obj1,...obj2}
console.log(objj3)

console.log(Object.keys(stud)) //for accessing all the keys of object 
console.log(Object.values(stud)) //for accessing all values from object 
console.log(Object.entries(stud))//for checking entreis


console.log(stud.hasOwnProperty('name')); // for checking there is such key is present or not

//check object methods from console < prototype

const user1={
    name:"priti",
    email:"priti@google.com",
    mentor:"shirisha",
    age:21,
}
//destructuring the objects
const {mentor:m , age:a}= user1
console.log(m)
console.log(a)