function dividerByValue(value){
    let result = 0;
    return function(divider){
        return result = value/divider;
    }
}
const calc = dividerByValue(4000);
console.log(calc(50));