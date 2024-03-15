let math = 1;
let literature = 53;
let physics = 79;
function rating(...numbers){
    let sum = 0;
    if(numbers.every((value) => value >=1 && value<=100)){
        sum = numbers.reduce((total,num)=>total + num, 0);
    }else{
        console.log("Your value is not in range")
    }
    return sum/numbers.length;
}
console.log(rating(math,literature,physics));