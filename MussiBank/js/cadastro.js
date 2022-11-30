
const inputCPF = document.querySelector("#cpfInput");
const telefoneInput = document.querySelector("#telefoneInput");
const btnRegister = document.querySelector(".btn-register");
const email = document.querySelector("#email");
const fnameInput = document.querySelector("#fnameInput");

let validador=0;




inputCPF.addEventListener('input', function(e){
    formataCPF(e.target.value);


},false)




telefoneInput.addEventListener('input', function(e){
    formataTelefone(e.target.value);
}, false)



email.addEventListener('input', function(e){
    validarEmail(e.target.value);
},false)

fnameInput.addEventListener('input', function(e){
    validaNome(e.target.value);
}, false)



function validaNome(nome){
    if (nome.length==4){
        validador++;
        console.log(validador);
        ativaBtn(validador);
    }
}



function formataCPF(cpf){   

    let num = cpf.replace(/[^\d]/g, ''); 
    let len = num.length; 
  
    if(len <= 6){
      cpf = num.replace(/(\d{3})(\d{1,3})/g, '$1.$2');  
    }else if(len <= 9){
      cpf = num.replace(/(\d{3})(\d{3})(\d{1,3})/g, '$1.$2.$3');
    }else if(len <=11){
      cpf = num.replace(/(\d{3})(\d{3})(\d{3})(\d{1,2})/g, "$1.$2.$3-$4");
    }

    inputCPF.value = cpf;


    if(len ==11){
        let valida=validarCPF(num);

        if(valida == true){
            validador++;
            console.log(validador);
            ativaBtn(validador);

            
        }

    }else{

    }

}



function formataTelefone(telefone){
    let num = telefone.replace(/[^\d]/g, '');
    let len = num.length;


        telefone = num.replace(/(\d{2})(\d{5})(\d{4})/g, '($1)$2-$3'); 

        if(len ==11){
            validador++;
            ativaBtn(validador);
            console.log(validador);
        }
    
    telefoneInput.value=telefone;

}

function validarEmail(emailValue){
    let reg = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
    if(reg.test(emailValue)){
        console.log("True");
        email.style.backgroundColor  = "white";
        validador++;
        console.log(validador);
        ativaBtn(validador);
        
        return true;
    }else{
        email.style.backgroundColor  = "orange";
        console.log("False");
        return false;
    }


}

function validarCPF(cpf) {	
	cpf = cpf.replace(/[^\d]+/g,'');	
	if(cpf == '') return false;	
	// Elimina CPFs invalidos conhecidos	
	if (cpf.length != 11 || 
		cpf == "00000000000" || 
		cpf == "11111111111" || 
		cpf == "22222222222" || 
		cpf == "33333333333" || 
		cpf == "44444444444" || 
		cpf == "55555555555" || 
		cpf == "66666666666" || 
		cpf == "77777777777" || 
		cpf == "88888888888" || 
		cpf == "99999999999")
			return false;		
	// verifica o 1 digito	
	add = 0;	
	for (i=0; i < 9; i ++)		
		add += parseInt(cpf.charAt(i)) * (10 - i);	
		rev = 11 - (add % 11);	
		if (rev == 10 || rev == 11)		
			rev = 0;	
		if (rev != parseInt(cpf.charAt(9)))		
			return false;		
	// verifica o 2 digito	
	add = 0;	
	for (i = 0; i < 10; i ++)		
		add += parseInt(cpf.charAt(i)) * (11 - i);	
	rev = 11 - (add % 11);	
	if (rev == 10 || rev == 11)	
		rev = 0;	
	if (rev != parseInt(cpf.charAt(10)))
		return false;		
	return true;   
}




