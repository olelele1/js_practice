function sum(...numbers){
    return numbers.reduce((total,num) => total + num, 0);
}
console.log(sum(1,2,3,4,100,41324,54))