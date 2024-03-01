let string = "Hello World";
let eng = 'A, E, I, O, U, Y';
function  newString(){
    for( let i = 0; i<string.length;i++){
        if(string[i].indexOf() == eng )
        string[i] = "*";
    }
    return string;
}
newString(string);
console.log(string);