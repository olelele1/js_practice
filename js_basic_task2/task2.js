let basicPrice = 10000, year = 2017, km = 70000, security = true , elektro = true , climate = false;
let newSum = 0;
if(year>=2019&&year<=2020){
    newSum = basicPrice/100*10;
}
if(km>=50000&&km<=100000){
    newSum -= (basicPrice/100*5);
}
if(security == true ){
    newSum += (basicPrice/100*8);
}
if(climate == true){
    newSum += (basicPrice/100*7);
}
if(elektro == true ){
    newSum += (basicPrice/100*15);
}
console.log("Base price was: " + basicPrice + "New price is " + newSum)

//!не получилось :(
/*let auto = {
  year: 2020,
  km: 70000,
  climate: true,
  security: true,
  elektro: false,
  price: 10000
};
let baseSum = 10000;
let newSum = 0;
for (let key in auto) {
  switch (key) {
    case key:
      if (auto[key] >= 2019 && auto[key] <= 2020) {
        newSum += (10000/100 * 10);
      }
      console.log("year");
      break;
    case 2:
      if (auto[key] >= 50000 && auto[key] <= 100000) {
        newSum -= (10000/100 * 5);
      }
      break;
    case 3:
      if (auto[key] == true) {
        newSum += (10000/100 * 7);
      }
      console.log("price");
      break;
    case 4:
      if (auto[key] == true) {
        newSum += (10000/100 * 8);
      }
      break;
    case 5:
      if (auto[key] == true) {
        newSum += (10000/100 * 8);
      }
      break;
    default:
      console.log("Ni4o");
  }
}
console.log(newSum);
*/