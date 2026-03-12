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

function example4() {
    let hiddenText4 = document.getElementById("hiddenText4");
    let number1 = +document.getElementById("number1ex4").value;
    let number2 = +document.getElementById("number2ex4").value;
    let number3 = +document.getElementById("number3ex4").value;

    if (number1 > number2 && number1>number3){
        hiddenText4.innerHTML = "Số lớn nhất là: "+number1;
    }else if(number2>number1 && number2>number3){
        hiddenText4.innerHTML = "Số lớn nhất là: "+number2;
    }else{
        hiddenText4.innerHTML = "Số lớn nhất là: "+number3;
    }
}

function example5() {
    let hiddenText5 = document.getElementById("hiddenText5");
    let number1 = +document.getElementById("number1ex5").value;
    let number2 = +document.getElementById("number2ex5").value;
    let number3 = +document.getElementById("number3ex5").value;
    let average = (number3+number2+number1)/3;
    if (average >= 9.0){
        hiddenText5.innerHTML = "Bạn xếp hạng A"
    }else if (average >= 7.0 && average < 9.0)
    {
        hiddenText5.innerHTML = "Bạn xếp hạng B"
    }else if (average >= 5.0 && average < 7.0){
        hiddenText5.innerHTML = "Bạn xếp hạng C"
    }else {
        hiddenText5.innerHTML = "Bạn xếp hạng D"
    }
}

function example6(){
    let hiddenText6 = document.getElementById("hiddenText6");
    let number1 = +document.getElementById("number1ex6").value;
    let phanTramHoaHong = 0.05;
    let soTienNhanDuoc = number1*phanTramHoaHong;
    hiddenText6.innerHTML = "Số tiền nhận được của bạn là: "+soTienNhanDuoc;
}

function example7(){
    let hiddenText7 = document.getElementById("hiddenText7");
    let number1 = +document.getElementById("number1ex7").value;
    let chiPhiCoDinh = 25000;
    let soTienNhanDuoc;
    if (number1 > 200){
        soTienNhanDuoc = 50*600 + 400*150 + (number1-200)*200
    }else if (number1 > 50){
        soTienNhanDuoc = (number1-50)*400 + 50*600;
    }else{
        soTienNhanDuoc = number1*600;
    }

    hiddenText7.innerHTML = "Số tiền cần trả là: "+(soTienNhanDuoc+chiPhiCoDinh);
}

function laySoNgauNhien(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}