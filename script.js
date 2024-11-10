function doalert(){
    alert("Credentitals didn't match");

}
function docheck(){
    var password= document.getElementById("pass").value;
    if(password.length<8){
        alert("Password length should be greater than or equal to 8");
    }else{
        alert("Registered successfully...");
    }
}
function visibleregister(){
    document.getElementById("login-form").style.visibility='hidden';
    document.getElementById("register-form").style.visibility='visible';
    document.getElementById("regis-head").style.borderColor='#ff523b';
    document.getElementById("login-head").style.borderColor='transparent';
}
function visiblelogin(){
    document.getElementById("login-form").style.visibility='visible';
    document.getElementById("register-form").style.visibility='hidden';
    document.getElementById("login-head").style.borderColor='#ff523b';
    document.getElementById("regis-head").style.borderColor='transparent';
}