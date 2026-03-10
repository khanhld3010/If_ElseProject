function example1(){
    let browser = prompt("Enter browser name!");
    switch (browser) {
        case "Edge":
            alert("You've got the Edge!");
            break;
        case "Chrome":
        case "Firefox":
        case "Safari":
        case "Opera":
            alert("Okay we support these browsers too");
            break;
        default:
            alert("We hope that this page looks ok!");
    }
}

function example2(){
    let a = prompt('a?', '');
    switch (a) {
        case '0':
            alert( 0 );
            break;
        case '1':
            alert( 1 );
            break;
        case '2':
        case '3':
            alert( '2,3' );
            break;
    }
}

function example3(){
    let a = prompt('Type a number', 0);
    if(a > 0){
        alert(1);
    }else if(a < 0){
        alert(-1);
    }else {
        alert(0);
    }
}
function example4(){
    let a = prompt('Type a number', 0);
    switch (a){
        case '0':
            alert(0);
            break;
        case '5':
            alert(1);
            break;
        case '-5':
            alert(-1);
            break;
    }
}