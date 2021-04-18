
function resultado(){
    
    let imc;
    let peso =  document.getElementById("peso").value 
    let altura = document.getElementById("altura").value 
    let convPeso = Number(peso)
    let convAltura = Number(altura)

    imc = convPeso / convAltura * convAltura;

   

    console.log(Number(peso));
    
    if(imc<18.5){

       alert("Baixo Peso")
    }
    else if(imc<=18.5 && imc <= 24.9){
        alert("Peso Normal")
    }
    else if(imc >= 18.5 && imc >= 24.9){
        alert("Sobrepeso")
    }
    else if(imc == 25.0  && imc <= 29.0){
        alert("Pré-Obeso")
    }
    else if(imc >= 30  && imc <= 34.9){
        alert("Obesidade I")
    }
    else if(imc >= 35.0  && imc <= 39.9){
        alert("Obesidade II")
    }
    else if(imc >= 40.0){
        alert("Obesidade III")
    }
}

resultado()
