function example1(){
    let a = prompt("Enter a FirstNumber");
    let b = prompt("Enter a SecondNumber");

    a+b < 4 ? alert("Below") : alert("result");
}

function example2(){
    let message = prompt("Enter a message");
    let login = (message === 'Employee') ? 'Hello' :
        (message === 'Director') ? 'Greetings' :
            (message === '') ? 'No Login' : '';
    alert(login);

}