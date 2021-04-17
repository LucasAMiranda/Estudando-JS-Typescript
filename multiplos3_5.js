let mult3 = 3;
let mult5 = 5;
let soma;
let i = 0;

/*
for(i=0;i<=1000;i++){
    if(i  % mult5 ===  0 || i % mult3 === 0){
        console.log (i + i);
    }
}
*/

while(i <= 1000){
    if(i % mult5 ===  0  || i %  mult3  === 0){
        console.log(  i  +  i)
    }
    
    i++;
}