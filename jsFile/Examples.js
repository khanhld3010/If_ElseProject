function example1() {
    let hiddenText1 = document.getElementById("hiddenText1");
    let number1 = document.getElementById("Number1");
    let number2 = document.getElementById("Number2");
    if (parseInt(number1.value) % parseInt(number2.value) === 0) {
        hiddenText1.innerHTML = 'số a chia hết cho số b';
    }else {
        hiddenText1.innerHTML = "số a không chia hết cho số b";
    }
}

function example2() {
    let hiddenText2 = document.getElementById("hiddenText2");
    let age = document.getElementById("age").value;
    if (parseInt(age) >= 16) {
        hiddenText2.innerHTML = "Đủ tuổi học lớp 10";
    }else hiddenText2.innerHTML = "không đủ tuổi"
}

function example3() {
    let hiddenText3 = document.getElementById("hiddenText3");
    let randomNumber =laySoNgauNhien(-100, 100);
    let positiveNumberMessage;
    if (randomNumber > 0){
        positiveNumberMessage = 'Đây là số lơn hơn không';
    }else if (randomNumber === '0'){
        positiveNumberMessage = 'Đây là số 0';
    }else {
        positiveNumberMessage = 'Đây là số nhỏ hơn 0';
    }
    hiddenText3.innerHTML = "Số ngẫu nhiên: "+randomNumber + "<br/>" + positiveNumberMessage;
}

function laySoNgauNhien(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}