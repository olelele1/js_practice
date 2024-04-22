export default function checkTimeOut(text,delay){
setTimeout(function(){
    console.log(text);
},delay);    
}
checkTimeOut("Hello friend",5000)