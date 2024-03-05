const numbers = ["String one", "String two", "string three"]
let arr = [];
for (const iterator of numbers) {
    arr.push(iterator.toUpperCase());
}
console.log(arr);