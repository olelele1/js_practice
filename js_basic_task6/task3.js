function calc(value1, value2, operator) {
    if(arguments.length>=4){
        throw new Error("WE can USE only three ARGUMENTS");
    }
    if(value2 == 0 && operator === "/"){
        throw new Error("It is not possible to use division against 0");
    }
    if(typeof value1 !== "number"||typeof value2 !== "number"){
        throw new Error("First and second arguments should be numbers");
    }
    if(!["+","/","*","-"].includes(operator)){
        throw new Error("Only availiable operators are +,-,*,/.");
    }
  switch (operator) {
    case "+":
      return value1 + value2;
    case "-":
      return value1 - value2;
    case "*":
      return value1 * value2;
    case "/":
      return value1 / value2;
    default:
        throw new Error("Houston we have a problem");
  }
}
console.log(calc('fdf', 3, "/"));
