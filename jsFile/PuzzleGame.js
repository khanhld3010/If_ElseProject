let bosuutap= [
    "https://img.freepik.com/hinh-chup-mien-phi/hinh-nen-gradient-mo-ao-day-mau-sac_58702-2950.jpg?\n" +
    "            semt=ais_hybrid&w=740&q=80",
    "https://img.freepik.com/hinh-chup-mien-phi/hinh-nen-gradient-mo-ao-day-mau-sac_58702-3762.jpg?\n" +
    "            semt=ais_hybrid&w=740&q=80",
    "https://img.freepik.com/hinh-chup-mien-phi/hinh-nen-gradient-mo-ao-day-mau-sac_58702-3356.jpg?\n" +
    "            semt=ais_rp_50_assets&w=740&q=80",
    "https://img.freepik.com/hinh-chup-mien-phi/nen-ket-cau-be-tong-hoa-tiet-mau-hong-nhat_53876-129734.jpg?\n" +
    "            semt=ais_hybrid&w=740&q=80"
];
let image1 = document.getElementById("image1");
let image2 = document.getElementById("image2");
let image3 = document.getElementById("image3");
let image4 = document.getElementById("image4");

changeImage(image1, parseInt(image1.dataset.puzzle));
changeImage(image2, parseInt(image2.dataset.puzzle));
changeImage(image3, parseInt(image3.dataset.puzzle));
changeImage(image4, parseInt(image4.dataset.puzzle));



function canVictory(){
    let hiddenText = document.getElementById("hiddenText");
    if (parseInt(image1.dataset.puzzle) === parseInt(image2.dataset.puzzle)
        && parseInt(image2.dataset.puzzle) === parseInt(image3.dataset.puzzle)
        && parseInt(image3.dataset.puzzle) === parseInt(image4.dataset.puzzle)) {


        hiddenText.innerHTML = "Bạn đã chiến thắng";
    }else {
        hiddenText.innerHTML = "Hãy tiếp tục";
    }
}

function changeImage(image,number){
    image.addEventListener("click",function(){
        number = number + 1;

        if (number >= bosuutap.length){
            number = 0;
        }
        image.dataset.puzzle = number;
        canVictory();

        image.src = bosuutap[number];
    });
}