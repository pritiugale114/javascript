//Nullish coalescing operator (??): for null undefined
let val;
val=5 ?? 10;
val1=null ?? 10;
console.log(val);
console.log(val1);
val2=null ?? 10 ?? 20;
console.log(val2);

//terniary operator
//condition ? true : false;
const price=10;
price >=18 ? console.log("yes") : console.log("no")

//to check object, array is empty or not.

const emptyobj ={}

if(Object.keys(emptyobj).length ===0){
    console.log("object is empty");
}
