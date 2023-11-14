let imgBox = document.getElementById("imgBox");
let QR = document.getElementById("QR");
let Texts = document.getElementById("Texts");

function Generate(){

        QR.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + Texts.value;
        imgBox.classList.add("img-show");
    
};