 function compare(x,y){
    let msg;

    if(x>y){
        msg = `O número ${x} é maior que o número ${y}`;

    }else if (x<y){
        msg = `O número ${x} é menor que o número ${y}`;
    }
    else{
        msg = "O dois número são iguais";
    }

    console.log(msg);

}

export default compare;