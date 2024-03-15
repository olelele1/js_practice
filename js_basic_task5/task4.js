let math = 1;
let literature = 53;
let physics = 79;
function rating(...numbers) {
  let sum = 0;
  if (numbers.every((value) => value >= 1 && value <= 100)) {
    sum = numbers.reduce((total, num) => total + num, 0);
  } else {
    console.log("Your value is not in range");
  }
  let total = sum / numbers.length;
  let message =
    total < 49
      ? "Low performance"
      : total > 49 && total < 69
      ? "Medium performance"
      : total > 69 && total < 89
      ? "Good performance"
      : "Very good performance";
  return message;
}
console.log(rating(math, literature, physics));
