//var is not used bcz it doesnt have block scope 
//block scope and global scope

let a=100; //global scope
 if(true){
    let a=10; //block  scope
    const b=20;
    var c=30;
    console.log(a);
 }
console.log(a);

//nested scope

 if(true){
     let username="priti";
     if(username=="priti"){
        let website="host"
        console.log(website + website)
     }
     //console.log(website)
 }



 //this keyword : to access current context

 const user ={
    username:"priti",
    age:21,
    welcomemessage:function(){
        console.log(`${this.username},welcome to website`)
    }
 }
 user.welcomemessage()
 user.username="samy"
 user.welcomemessage();

 //arrow function

 //ways to write function

 const name = () => {
    return `priti`
 }
console.log(name())
 const add = (num1,num2)=>{
    return num1+num2
 }
 console.log(add(2,3))
 
 const sum = (num1,num2)=> num1+num2
 console.log(sum(5,2))