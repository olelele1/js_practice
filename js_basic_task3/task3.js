function calcNumbers(a,b){
    let sum=[];
    for(a;a<b;a++){
        if(a%2 == 0){
            sum += a + ",";
        }
    }
    console.log(sum)
}
console.log(calcNumbers(40,50));