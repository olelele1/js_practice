let email = "daniel.abrams@gmail.com";
let newEmail = [];
let result;
newEmail = email.split("@");
newEmail.splice(1,1,"changed.com");
result = newEmail.join("@");
console.log(result);