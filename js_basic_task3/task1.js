function newString(str) {
    let strUpper = str.toUpperCase();
  for (let i = 0; i < strUpper.length; i++) {
    strUpper = strUpper.replace(/[AEOUIY]/g, "*");
  }
  return strUpper;
}
console.log(newString("Hello world"));