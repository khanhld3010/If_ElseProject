function calculateBmi(){
    event.preventDefault()
    let weight = parseFloat(document.getElementById("weight").value);
    let height = parseFloat(document.getElementById("height").value);
    let bmiResult = weight / (height*height);
    bmiChange(bmiResult);
}
function bmiChange(number){
    if (number < 18.5){
        alert("Underweight");
    }else if(number >= 18.5 && number < 25.0){
        alert("Normal");
    }else if (number >= 25.0 && number < 30.0){
        alert("Overweight");
    }else {
        alert("Obese");
    }
}