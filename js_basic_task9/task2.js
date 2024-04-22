import checkTimeOut from "./task1.js";
function callTask(text1,time,checkTimeOut){
    setTimeout(function(){
        checkTimeOut(text1);
    },time);
}
callTask("Lorem ipsum",1000,checkTimeOut);