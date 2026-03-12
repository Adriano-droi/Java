let password = document.getElementById("password");
let strengthBar = document.getElementById("strength");
let message = document.getElementById("message");//getElement lets you grab things from html
//listens to what you type it like going live
password.addEventListener("input", function(){

let value = password.value;
let strength = 0;

if(value.length >= 6){//the characters shuold be six or gretter
strength += 1;
}
//the plus one checks the value of the inserted character and if its there it adds the strength of th password
//confirms whether required number of characters is there
if(/[A-Z]/.test(value)){
strength += 1;
}
//confirms whether letter in caps is thereand  adds the strength
if(/[0-9]/.test(value)){
strength += 1;
}
//confirms whether digits are availllable in your in your password
if(/[!@#$%^&*]/.test(value)){
strength += 1;
}
//confirms whather special characters are added
if(strength === 1){
strengthBar.style.width = "25%";//decides to where the bar will be filled
strengthBar.style.background = "red";
}


else if(strength === 2){
strengthBar.style.width = "50%";
strengthBar.style.background = "orange";
}

else if(strength === 3){
strengthBar.style.width = "75%";
strengthBar.style.background = "blue";
}

else if(strength === 4){
strengthBar.style.width = "100%";
strengthBar.style.background = "green";
}
// all the else if decides the outcome
});