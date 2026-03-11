let checkboxGood = document.getElementById("checkboxGood");
let checkboxFast = document.getElementById("checkboxFast");
let checkboxCheap = document.getElementById("checkboxCheap");

checkboxGood.addEventListener("change", function() {
    if (checkboxFast.checked === true) {
        checkboxCheap.checked = false;
    }else if (checkboxCheap.checked === true) {
        checkboxFast.checked = false;
    }

});
checkboxFast.addEventListener("change", function() {
    if (checkboxCheap.checked === true) {
        checkboxGood.checked = false;
    }else if (checkboxGood.checked === true) {
        checkboxCheap.checked = false;
    }

});
checkboxCheap.addEventListener("change", function() {
    if (checkboxGood.checked === true) {
        checkboxFast.checked = false;
    }else if (checkboxFast.checked === true) {
        checkboxGood.checked = false;
    }

});

