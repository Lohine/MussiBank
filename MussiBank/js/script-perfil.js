const eyeIcon = document.querySelector("#eyeIcon");
const saldo = document.querySelector("#valueSaldo")
const privacy = document.querySelector(".privacy");
const privacyFatura = document.querySelector("#faturaCC")


const valor = saldo.innerHTML;


eyeIcon.onclick = function(){
    if (eyeIcon.className== "fa-sharp fa-solid fa-eye"){
        eyeIcon.className= 'fa-solid fa-eye-slash';
        saldo.style.filter = "blur(7px)";
        privacy.style.filter = "blur(7px)";
        privacyFatura.style.filter = "blur(7px)";

    }else{
        eyeIcon.className="fa-sharp fa-solid fa-eye";
        saldo.style.filter = "blur(0px)";
        privacy.style.filter = "blur(0px)";
        privacyFatura.style.filter = "blur(0px)"


    }
}





document.onload=console.log(valor)
document.onload=console.log(saldo.innerHTML)