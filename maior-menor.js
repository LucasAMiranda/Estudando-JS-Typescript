
let num1 = parseInt(prompt("Informe o primeiro número: ")); //10
let num2 = parseInt(prompt("Informe o segundo número: ")); //5
let num3 = parseInt(prompt("Informe o terceiro número")); //4 


function maior_menor(){
    if(num1 > num2 && num1 > num3)
    {
        console.log(`O maior número é ${num1}`)
    
    }
    else if(num2 > num1 && num2 > num3 ){

        console.log(`O maior número é ${num2}`)
    }
    else{

        console.log(`O maior número é ${num3}`)
    }
}

maior_menor()