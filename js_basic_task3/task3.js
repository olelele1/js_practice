function calcNumbers(a, b) {
  let sum = [];
  if (a < b) {
    for (a; a < b; a++) {
      if (a % 2 == 0) {
        sum += a + ",";
      }
    }
  }else if (a > b) {
    for (b; b < a; b++) {
      if (b % 2 == 0) {
        sum += b + ",";
      }
    }
  }
  return sum;
}
console.log(calcNumbers(74, 32));
