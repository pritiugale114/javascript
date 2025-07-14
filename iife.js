//IIFE : immediately Invoked function expression
//used to execute function immediately for preventing from global polution

(function priti(){  //named iife
    console.log("priti")
})();

(() =>{
    console.log("priti")
})();   //; semicolon is required

((name) =>{
    console.log(`${name}`)
})("sammy");