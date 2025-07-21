 const num1 = document.getElementById("n1");
        const num2 = document.getElementById("n2");
        const answer = document.getElementById("result");

        function sum() {
            const v1 = parseInt(num1.value);
            const v2 = parseInt(num2.value);
            const sum = v1 + v2;
            answer.innerText = `Addition is ${sum}`;
        }
          function sub() {
            const v1 = parseInt(num1.value);
            const v2 = parseInt(num2.value);
            const sub = v1 - v2;
            answer.innerText = `Substraction is ${sub}`;
        }
          function mult() {
            const v1 = parseInt(num1.value);
            const v2 = parseInt(num2.value);
            const mult = v1 * v2;
            answer.innerText = `Multiplication is ${mult}`;
        }
          function div() {
            const v1 = parseInt(num1.value);
            const v2 = parseInt(num2.value);
            const div = v1 / v2;
            answer.innerText = `Division is ${div}`;
        }
         function reset(){
            num1.value =" ";
            num2.value=" ";
            answer.innerText="Result is :";
         }