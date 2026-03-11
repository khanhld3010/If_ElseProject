let btnYes = document.getElementById("btnYes");
let hiddenText = document.getElementById("hiddenText");
let cnt = 0;
btnYes.addEventListener("click", function() {
    cnt ++;
    hiddenText.innerText = "<3 x"+cnt;
});

let btnNo = document.getElementById("btnNo");
btnNo.addEventListener("click", function() {
    //lấy pixel tối đa của màn hình và trừ đi px của nút bấm
    let maxHeight = window.innerHeight - btnNo.offsetHeight;
    let maxWidth = window.innerWidth - btnNo.offsetWidth;

    //tính ngẫu nhiên một tọa độ mới
    let newHeight = Math.floor(Math.random() * maxHeight);
    let newWidth = Math.floor(Math.random() * maxWidth);

    //css để nút bấm thay đổi vị trí
    btnNo.style.position = "absolute";
    btnNo.style.top = newHeight + "px";
    btnNo.style.left = newWidth + "px";



    cnt ++;
    hiddenText.innerText = "Tại sao x"+cnt;
})

