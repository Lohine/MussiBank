const agencia = document.querySelector("#ccAgencia");
const inputAgencia = document.querySelector("#agencia");
const conta = document.querySelector("#ccConta");
const inputConta = document.querySelector("#conta")
const inputToken = document.querySelector("#token");
const linkAccount =document.querySelector("#linkAccount");
let btnNextLogin = document.querySelector("#btn-next");


let counterAgencia = 0;
let counterConta = 0;
let counterToken = 0;
let counterTotal = [0,0,0]

inputAgencia.addEventListener('input', function (e) {
    linkAccount.setAttribute("href", "");

    btnNextLogin.style.cursor = "default";
    btnNextLogin.style.opacity = "0";

    agencia.innerHTML=e.target.value;
    counterTotal[0] = 0;
    counterAgencia = e.target.value.length;
    inputAgencia.className = "invalid";
    console.log(counterAgencia);
    if(counterAgencia ==4){
        inputAgencia.className=""
        counterTotal[0] = 1;
        console.log(`Counter Agencia Final: ${counterTotal}`);

        
        if (counterTotal[0] == 1 && counterTotal[1] ==1 && counterTotal[2] ==1){
            linkAccount.setAttribute("href", "account.html");
            btnNextLogin.style.opacity = "1";
            btnNextLogin.style.cursor = "pointer";
        }
    }

  }, false);


  inputConta.addEventListener('input', function(e){
    linkAccount.setAttribute("href", "");


    btnNextLogin.style.cursor = "default";
    btnNextLogin.style.opacity = "0";
    conta.innerHTML=e.target.value;
    counterTotal[1] = 0;
    counterConta= e.target.value.length;
    inputConta.className="invalid";
    console.log(`Counter Conta Inicial: ${counterTotal}`);
    if(counterConta == 6){
        inputConta.className="";
        counterTotal[1] = 1;
        console.log(`Counter Conta Final: ${counterTotal}`);

        
        if (counterTotal[0] == 1 && counterTotal[1] ==1 && counterTotal[2] ==1){
            linkAccount.setAttribute("href", "account.html");
            btnNextLogin.style.opacity = "1";
            btnNextLogin.style.cursor = "pointer";
        }

    }
  }, false)

  inputToken.addEventListener('input', function(e){
    linkAccount.setAttribute("href", "");

    btnNextLogin.style.cursor = "default";
    btnNextLogin.style.opacity = "0";
    counterToken=e.target.value.length;
    console.log(`Counter Token inicial: ${counterTotal}`);
    counterTotal[2] = 0;
    inputToken.className="invalid";
    if(counterToken ==8){
        inputToken.classList="";
        counterTotal[2] = 1;
        console.log(`Counter Token Final: ${counterTotal}`);


        if (counterTotal[0] == 1 && counterTotal[1] ==1 && counterTotal[2] ==1){
            linkAccount.setAttribute("href", "account.html");
            btnNextLogin.style.opacity = "1";
            btnNextLogin.style.cursor = "pointer";
        }

    }
  },false);

