"use strict"
let userName = prompt("whos`s there?", "");
if(userName === "Admin"){
    let pass = prompt("Password?", "");
    if(pass === "TheMaster"){
        alert("Welcome");
    }else if(pass === "" || pass === null){
        alert("cancelled");
    }else {
        alert("Wrong Password");
    }
    }else if(userName === "" || userName === null){
        alert("cancelled");
    }else{
        alert("i don`t know you");  
}