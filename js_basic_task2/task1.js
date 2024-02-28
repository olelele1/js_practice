/*let a=5
let b=++a;

console.log(a + "a");
console.log(b + "b"); */
function doxidCalc(doxid){
    let newDoxid;
    if(doxid<=10000){
        newDoxid = doxid/100*5 + ",podatok %5";
    }else if(doxid>10000&&doxid<=50000){
        newDoxid = doxid/100*10 + ",podatok %10";
    }else if(doxid>50001&&doxid<=100000){
        newDoxid = doxid/100*15 + ",podatok %15";
    }else if(doxid>100001&&doxid<=200000){
        newDoxid = doxid/100*20 + ",podatok %20";
    }else if(doxid>200000){
        newDoxid = doxid/100*25 + ",podatok %25";
    }
    return "old doxid:" + doxid + "," + "new doxid:" + newDoxid;
}
console.log(doxidCalc(278914));