let num = [32,13,4,15,5];
console.log(num[1]);
console.log(num[2]);
console.log(num[3]);

let info=["priti",21,9205];
console.log(info[0]);
console.log(info[1]);
console.log(info[2]);
console.log(info.length);
let arr=[];
arr[0]="priti";
arr[1]="sharad";
arr[2]="ugale";
console.log(arr);
arr[5]="vaibhav";
console.log(arr);
console.log(arr[4]);

//array methods
console.log(arr.pop());
console.log(arr);
console.log(arr.push("krishna"));
console.log(arr);
console.log(arr.shift());  //shift : remove
console.log(arr);
console.log(arr.unshift("miss.")); //unshift : add 
console.log(arr);
console.log(arr.includes("sharad")); //includes
let arr1=["vaibhav","sharad","ugale"];
console.log(arr.concat(arr1)); //concat
console.log(arr.indexOf("sharad")); //indexof 
console.log(arr.reverse());  //reverse
console.log(arr1.slice(1,2));
console.log(arr1.slice(-2)); //slice : copy of array doesnt include last element
console.log(arr1);
console.log(arr1.splice(0,2));//splice : change into main array , include last element.
console.log(arr.sort());
let arr2=[[2,3],[2,4],[2,5],[2,6]];
console.log(arr2[1]);
console.log(arr2[3]);

const myarr2=new Array(1,2,3,4);

//prototype in console 


//join : add element into   strings

const newarr =arr2.join();
console.log(newarr);

const marval_heros=["spirderman","thor","batman"];
const dc_heros=["rangers-red","yellow","pink"];

marval_heros.push(dc_heros);
console.log(marval_heros);
console.log(marval_heros [3][2]);//put second array as a single element

marval_heros.concat(dc_heros);
console.log(marval_heros); //same issue

const all_heros = marval_heros.concat(dc_heros);
console.log(all_heros);

//spread operators: make array elements individual (seperate)

const all_new_heros=[...marval_heros,...dc_heros];
console.log(all_new_heros);

//flat :return new array marge all subarrays into one
const numm= [1,2,[3,4],[3,4,[5,6,7]]];
const new_num=numm.flat(Infinity); //depth  to solve array
console.log(new_num);

//isArray:check array is valid or not
console.log(Array.isArray("priti"));
console.log(Array.from("priti"));//create new array

//creating array of vairiable
let score1=100;
let score2=102;
let score3=103;

console.log(Array.of(score1,score2,score3));