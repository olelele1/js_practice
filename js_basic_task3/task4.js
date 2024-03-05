function capsChars(str1){
    let str2 = str1.toUpperCase();
    if(str1 == str2){
        console.log("All caps");
        return true;
    }else if(str1 != str2){
        console.log("Not all caps");
        return false;
    }
}
console.log(capsChars("VGHFGH4234"));