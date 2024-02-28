let a = [6,2,1,8,10];
let b = [1,1,11,2,3];
let arr=[];
for(let i = 0; i<a.length;i++){
    if(a[i]<a[i+1]||a[i]>a[i+1]||a[i]&&true){
        arr = a.push(i);
    }
}
console.log(arr);