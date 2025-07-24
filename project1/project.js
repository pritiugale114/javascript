let body = document.querySelector('body')
let buttons = document.querySelectorAll('button')
buttons.forEach(function (button) {
    console.log(buttons);
    button.addEventListener('click', function (e) {
        console.log(e);
        console.log(e.target);
        if (e.target.id === 'green') {
            body.style.backgroundColor = e.target.id;
        }
        else if (e.target.id === 'white') {
            body.style.backgroundColor = e.target.id;
        }
        else if (e.target.id === 'blue') {
            body.style.backgroundColor = e.target.id;
        }
        else if (e.target.id === 'yellow') {
            body.style.backgroundColor = e.target.id;
        }
    });
});