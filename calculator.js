import compare from "./calculation.js"

//Array

const numberList = [[5, 4], [3, 4], [0, 0], [25, 30], [157, 157.1]];
/*
for(let i=0; i < numberList.length; i++){
        compare(numberList[i][0], numberList[i][1]);
}

let i=0;

while( i < numberList.length){
    compare(numberList[i][0], numberList[i][1]);
    i++; // i = i + 1
}

/*
for(let i=0; i < numberList.length; i++){
    if  (numberList[0[1] != numberList[0][1]]){
        compare(numberList[i][0], numberList[i][1]);
    }
}
*/

//Método map

numberList.map((args) => {
    return compare(args[0], args[1]);
});
