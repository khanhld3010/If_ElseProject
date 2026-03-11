function kiemTra(){
    let month = document.getElementById("month").value;
    let hiddenText = document.getElementById("hiddenText");
    switch (month) {
        case '1':
        case '3':
        case '5':
        case '7':
        case '8':
        case '10':
        case '12':
            hiddenText.innerText = "Tháng có 31 ngày";
            break;
        case '2':
            hiddenText.innerText = "Tháng có 28 hoặc 29 ngày";
            break;
        default:
            hiddenText.innerText = "Tháng có 30 ngày";
            break;
    }
}