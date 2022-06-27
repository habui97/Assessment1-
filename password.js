/* Directions and Additonal Checks together */

let password = "abcdefgh123456"; 
let forbiddenPassword1 = "letmein";
let forbiddenPassword2 = "password";
let passwordNumberReq = 0;
let passwordLetterReq = 0;
if (password == forbiddenPassword1 || password == forbiddenPassword2){
    console.log('Password cannot be like this');
}
else{
    if (password.length >= 10 && password.length <= 20){
    for (let i = 0; i < password.length; i++){
        if (password.charCodeAt(i) >= 48 && password.charCodeAt(i) <= 57){
            passwordNumberReq = 1;
        }
        if ((password.charCodeAt(i) >= 65 && password.charCodeAt(i) <= 90) || (password.charCodeAt(i) >= 97 && password.charCodeAt(i) <= 122)){
            passwordLetterReq = 1;
        }
    } 
    if (!passwordLetterReq){
        console.log('there no letter!');
    }
    if(!passwordNumberReq){
        console.log('there no number');
    }

    if (passwordLetterReq && passwordNumberReq){
        console.log('Good to go');
    }
    }else
        console.log('length req is not met');
}