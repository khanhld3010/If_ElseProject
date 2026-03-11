let field = document.getElementById("field");
let nutSo = document.getElementsByName("number");
let nutDau = document.getElementsByName("opp");

nutSo.forEach(nut => {
    nut.addEventListener("click", function () {
        field.value = field.value + nut.value;
    })
})

nutDau.forEach(nut => {
    nut.addEventListener("click", function () {
        field.value = field.value + nut.value;
    })
})

function clearScreen(){
    field.value = " ";
}

function handleSubmit(){
    field.value = eval(field.value);
}