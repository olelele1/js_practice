function recursiveCalc(startValue,finishValue){
    if(startValue<=finishValue){
        console.log(startValue);
        startValue++;
        recursiveCalc(startValue,finishValue);
    }
}
recursiveCalc(5,15);