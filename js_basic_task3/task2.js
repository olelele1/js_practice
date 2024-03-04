function newString(str,symbol){
    for(let i = 0;i<str.length;i++){
        let symbolVerify = str[i];
        if(symbolVerify === symbol){
            str = str.replace(str[i], "*");
        }
    }
    return str;
}
console.log(newString("Hello world", "l"));