function revenueCalc(revenue){
    let newRevenue;
    if(revenue<=10000){
        newRevenue = revenue - (revenue/100*5) + ",podatok %5";
    }else if(revenue>10000&&revenue<=50000){
        newRevenue = revenue - (revenue/100*10) + ",podatok %10";
    }else if(revenue>50001&&revenue<=100000){
        newRevenue = revenue - (revenue/100*15) + ",podatok %15";
    }else if(revenue>100001&&revenue<=200000){
        newRevenue = revenue - (revenue/100*20) + ",podatok %20";
    }else if(revenue>200000){
        newRevenue = revenue - (revenue/100*25) + ",podatok %25";
    }
    return "old doxid:" + revenue + "," + "new doxid:" + newRevenue;
}
console.log(revenueCalc(10000));
