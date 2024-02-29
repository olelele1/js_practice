let arr = [6, 4, 11, 1, 10];
let max = arr[0];
let min = arr[0];
let sumOfElements = 0;
let totalSum = 0;
for(let i=0;i<arr.length;i++){
  if(max<arr[i]){
    max = arr[i];
  }
  if(min>arr[i]){
    min=arr[i];
  }
  sumOfElements+=arr[i];
}
totalSum = sumOfElements-max-min;
console.log(totalSum);