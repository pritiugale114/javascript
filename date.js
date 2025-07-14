//dates date is a object in js 

let mydate = new Date();
console.log(mydate);
console.log(mydate.toString());
console.log(mydate.toDateString());
console.log(mydate.toLocaleString());
console.log(typeof mydate);
//create date
let createdate= new Date(2023,0,23);
console.log(createdate.toLocaleString());//1/23/2023, 12:00:00 AM
let cdate= new Date(2023,0,23,1,30,0);
//let cdate= new Date("01-14-2015");
console.log(cdate.toDateString());
console.log(cdate.toLocaleString());//1/23/2023, 1:30:00 AM
let myTimestamp=Date.now();
console.log(myTimestamp);
console.log(cdate.getTime());
//conversion milisecond to second
console.log(Math.floor(Date.now()/1000));

//more methods

let newdate = new Date();
console.log(newdate.getDay());
console.log(newdate.getHours());
console.log(newdate.getHours());
console.log(newdate.getMonth()+1);
console.log(newdate.getYear());
//localstring

newdate.toLocaleString('default',{
    weekday:"long",
})