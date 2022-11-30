function validateTest(desc,fn){
    try {
        fn();
        console.log("Test passed: " + desc);
    } catch (error) {
        console.log("Test fail: " + desc);
        console.assert(error);
    }
}

function assert(isTrue){
    if(!isTrue){
        throw new Error();
    }
}

validateTest('Deu errado!',() =>{
    assert(1 != 1);
});

validateTest('Foi um sucesso!',() =>{
    assert(1 == 1);
});


function validate_CPF(cpf, senha){
    return (cpf.length === 14 && senha.length >= 8 && cnpj.length === 18)
    
}

console.log(validate_CPF("093.984.839-20", "56.454.353/5353-45", "12345678"));

validateTest('Validando login automatico', () => {
    assert(validate_CPF("093.984.839-20", "56.454.353/5353-45", "12345678"))
})


const cpf_input = document.getElementById("main-input");
const senha_input = document.getElementById("password-input");


const checkbox = document.getElementById("checkbox");

checkbox.addEventListener('input', () => {
    validateTest('Validando cadastro manual', () => {
        assert(validate_CPF(cpf_input.value , "56.454.353/5353-45", senha_input.value));
    })
})