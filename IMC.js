
function resultado(){
    
    let imc;
    let peso = document.getElementById("peso")
    let altura = document.getElementById("altura")

    imc = peso / altura * altura;
    
    if(imc<18.5){

       console.log("Baixo Peso")
    }
    else if(imc<=18.5 && imc <= 24.9){
        console.log("Peso Normal")
    }
    else if(imc == 18.5 && imc >= 24.9){
        console.log("Sobrepeso")
    }
    else if(imc == 25.0  && imc == 29.0){
        console.log("Pré-Obeso")
    }
    else if(imc == 30  && imc >= 34.9){
        console.log("Obesidade I")
    }
    else if(imc == 35.0  && imc >= 39.9){
        console.log("Obesidade II")
    }
    else if(imc >= 40.0){
        console.log("Obesidade III")
    }
}

resultado()
