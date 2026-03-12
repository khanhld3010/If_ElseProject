function bai1(){
    let doC = +document.getElementById("doC").value;
    let doF = (doC*9/5)+32;
    let hiddenText = document.getElementById("hiddenText");
    hiddenText.innerHTML = "Độ F bằng: "+doF;
}

function bai2(){
    let m = document.getElementById("m").value;
    let feet = m*3.28
    let hiddenText1 = document.getElementById("hiddenText1");
    hiddenText1.innerHTML = "Feet bằng: "+feet
}

function bai3(){
    let side = document.getElementById("side").value;
    let area = Math.pow(side,2);
    let hiddenTex2 = document.getElementById("hiddenTex2");
    hiddenTex2.innerHTML = "Diện tích bằng: "+area
}
function bai4(){
    let longSide = +document.getElementById("longSide").value;
    let shortSide = +document.getElementById("shortSide").value;
    let area = longSide*shortSide;
    let hiddenTex3 = document.getElementById("hiddenTex3");
    hiddenTex3.innerHTML = "Diện tích bằng: "+area
}
function bai5(){
    let sideA = +document.getElementById("sideA").value;
    let sideB = +document.getElementById("sideB").value;
    let area = (sideA*sideB)/2;
    let hiddenTex4 = document.getElementById("hiddenTex4");
    hiddenTex4.innerHTML = "Diện tích bằng: "+area
}

function bai6(){
    let numberA = +document.getElementById("numberA").value;
    let numberB = +document.getElementById("numberB").value;
    let hiddenTex5 = document.getElementById("hiddenTex5");
    let numberNeedToCal = (0-numberB)/numberA;
    hiddenTex5.innerHTML = "số x cần tìm là: "+numberNeedToCal;
}

function bai7(){
    let numberA = +document.getElementById("numberAex7").value;
    let numberB = +document.getElementById("numberBex7").value;
    let numberC = +document.getElementById("numberCex7").value;
    let hiddenTex6 = document.getElementById("hiddenTex6");
    let delta = Math.pow(numberB,2)-4*numberA*numberC;
    let x1;
    let x2;

    if (numberA === 0){
        hiddenTex6.innerHTML = "Phương trình bậc 2 có a != 0"
        return
    }


    if (delta > 0){
        x1 = (-numberB+Math.sqrt(delta))/(2*numberA);
        x2 = (-numberB-Math.sqrt(delta))/(2*numberA);

        hiddenTex6.innerHTML= "Phương trình có 2 nghiệm: " + x1 + " và " + x2;

    }else if(delta === 0){
        x1 = (-numberB)/(2*numberA);


        hiddenTex6.innerHTML= "Phương trình có 2 nghiệm bằng nhau là: " + x1;
    }else{
        hiddenTex6.innerHTML="Phương trình vô nghiệm";
    }
}
function bai8(){
    let age = +document.getElementById("age").value;
    let hiddenText7 = document.getElementById("hiddenText7");
    if (Number.isInteger(age)){
        if (age >= 0 && age <= 120){
            hiddenText7.innerHTML ="Tuổi của bạn là: " +age;
        }else {
            hiddenText7.innerHTML ="Tuổi không hợp lệ";
        }
    }else {
        hiddenText7.innerHTML ="Tuổi không hợp lệ";
    }
}

function bai9(){
    let sideA = +document.getElementById("sideAofTriangle").value;
    let sideB = +document.getElementById("sideBofTriangle").value;
    let sideC = +document.getElementById("sideCofTriangle").value;
    let hiddenTex8 = document.getElementById("hiddenTex8");
    if (sideA > 0 && sideB > 0 && sideC > 0){
        if (sideA + sideB > sideC && sideA + sideC > sideB && sideB + sideC > sideA){
            hiddenTex8.innerHTML = "Tam giác có cạnh A: "+ sideA + " cạnh B: "+ sideB + " cạnh C: "+ sideC;
        }else{
            hiddenTex8.innerHTML = "Tam giác không hợp lệ";
        }
    }else {
        hiddenTex8.innerHTML = "Tam giác không hợp lệ";
    }
}
function bai10(){
    let kWh = +document.getElementById("kWh").value;
    let hiddenText9 = document.getElementById("hiddenText9");
    let total;
    if (kWh < 0){
        hiddenText9.innerHTML = "Số kWh không hợp lệ (kWh >=0)";
    }else {
        if (kWh >= 401){
            total = kWh * 2927;
            hiddenText9.innerHTML = "Số tiền phải trả "+total;
        }else if (kWh >= 301){
            total = kWh * 2834;
            hiddenText9.innerHTML = "Số tiền phải trả "+total;
        }else if (kWh >= 201){
            total = kWh * 2536;
            hiddenText9.innerHTML = "Số tiền phải trả "+total;
        }else if (kWh >= 101){
            total = kWh * 2014;
            hiddenText9.innerHTML = "Số tiền phải trả "+total;
        }else if (kWh >= 51){
            total = kWh * 1734;
            hiddenText9.innerHTML = "Số tiền phải trả "+total;
        }else {
            total = kWh * 1678;
            hiddenText9.innerHTML = "Số tiền phải trả "+total;
        }
    }
}
function bai11(){
    let salary = +document.getElementById("salary").value;
    let hiddenText10 = document.getElementById("hiddenText10");
    let tax;
    if (salary < 0){
        hiddenText10.innerHTML = "Thu nhập không hợp lệ (thu nhập >=0)";
    }else {
        if (salary <= 5000000){
            tax = salary * 0.05;
            hiddenText10.innerHTML = "Thu nhập phải trả "+tax;
        }else if (salary <= 10000000){
            tax = salary * 0.1;
            hiddenText10.innerHTML = "Thu nhập phải trả "+tax;
        }else if (salary <= 18000000){
            tax = salary * 0.15;
            hiddenText10.innerHTML = "Thu nhập phải trả "+tax;
        }else if (salary <= 32000000){
            tax = salary * 0.2;
            hiddenText10.innerHTML = "Thu nhập phải trả "+tax;
        }else if (salary <= 52000000){
            tax = salary * 0.25;
            hiddenText10.innerHTML = "Thu nhập phải trả "+tax;
        }else if (salary <= 80000000){
            tax = salary * 0.3;
            hiddenText10.innerHTML = "Thu nhập phải trả "+tax;
        }else {
            tax = salary * 0.35;
            hiddenText10.innerHTML = "Thu nhập phải trả "+tax;
        }
    }
}

function bai12(){
    let principal = +document.getElementById("Principal").value;
    let numberOfPeriod = +document.getElementById("NumberOfPeriod").value;
    let rate = +document.getElementById("Rate").value;
    let hiddenTex11 = document.getElementById("hiddenTex11");
    let tongTienNhanDuoc = principal * Math.pow((1+rate),numberOfPeriod);
    let soTienLaiLa = tongTienNhanDuoc - principal;
    hiddenTex11.innerHTML = "Tổng tiền nhận được là: "+tongTienNhanDuoc+ " số tiền lãi là: "+soTienLaiLa;
}