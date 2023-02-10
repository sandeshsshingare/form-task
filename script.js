var create_account = document.getElementById("create-account");


create_account.addEventListener("click", () => {
  var first_name = document.getElementById("first-name");
  var middle_name = document.getElementById("middle-name");
  var last_name = document.getElementById("last-name");
  var confirm_password = document.getElementById("confirm-password");

  if (
    first_name.value.trim() != "" &&
    last_name.value.trim() != "" &&
    emailvalid() &&
    checkpwd()
  ) {
    alert("hello your account is created succefully");
  }
  else{
    alert ("you didn't filled you details properly");
  }
});

function emailvalid() {
    var v;
  var email1 = document.getElementById("email-id").value;
  if (!email1.endsWith("@gmail.com")) {
    document.getElementById("email-id").style.border = "1px solid red";
  } else if (email1.endsWith("@gmail.com")) {
    document.getElementById("email-id").style.border = "1px solid green";
    v=true;
  }
  return v;
  // console.log( (email1.endsWith(".com")));
}

var special = /[!@$#%^&*()~:;"'{}]/;
var number = /[0-9]/;
var caps = /[A-Z]/;

function passwordf() {
   // var passwordforcheck;
  var passwordvalue = document.getElementById("password").value;
  // console.log(caps.test(passwordvalue));
 //document.getElementById("test").innerHTML = passwordvalue;
  if (
    passwordvalue.length >= 8 &&
    special.test(passwordvalue) &&
    number.test(passwordvalue) &&
    caps.test(passwordvalue)
  ) {
    document.getElementById("password").style.border = " 1px solid green";
    var passwordforcheck = document.getElementById("password").value;
  } else {
    document.getElementById("password").style.border = "1px solid red";
  }
  //console.log(passwordforcheck);
  
  return passwordforcheck;
}
document.getElementById("create-account").addEventListener("click", function (){

   
});

function pwd() {

     var k = passwordf();
     if(k!=undefined)
     {

         var c = k;
     }
     return c;
}
function checkpwd()
{
    var pw = pwd();
    var b;
    var confirmp = document.getElementById("confirm-password").value;
    if(pw==confirmp)
    {
        var b=true
        console.log(b);
    }
    return b
}
