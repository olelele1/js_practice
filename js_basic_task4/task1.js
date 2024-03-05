const numbers = [5, -4, 0, 6, 7, -1, 0, 0]
let posNumbers = 0;
let negNumbers = 0;
let zeroNumbers = 0;
for (const value of numbers) {
    if(value>0){
        posNumbers++;
    }else if(value<0){
        negNumbers++;
    }else if(value == 0){
        zeroNumbers++;
    }
}
console.log("Positive numbers: " + posNumbers + "\n" + "Negative numbers: " + negNumbers + "\n" + "Zero numbers: " + zeroNumbers); 