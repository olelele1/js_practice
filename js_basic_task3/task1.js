function newString(str) {
    let strUpper = str.toUpperCase();
    strUpper = strUpper.replace(/[AEOUIY]/g, "*");
  return strUpper;
}
console.log(newString("Hello world"));

