var create_account = document.getElementById("create-account");
create_account.addEventListener("click", () => {
  var first_name = document.getElementById("first-name");
  var middle_name = document.getElementById("middle-name");
  var last_name = document.getElementById("last-name");
  var confirm_password = document.getElementById("confirm-password");

  if (
    first_name.value.trim() != "" &&
    last_name.value.trim() != "" &&
    email.value.trim() != "" &&
    //password.value.trim() != "" &&
    confirm_password.value.trim() != ""
  ) {
    alert("hello your account is created succefully");
  }
});

function emailvalid() {
  var email1 = document.getElementById("email-id").value;
  if (!email1.endsWith("@gmail.com")) {
    document.getElementById("email-id").style.border = "1px solid red";
  } else if (email1.endsWith("@gmail.com")) {
    document.getElementById("email-id").style.border = "1px solid green";
  }
  // console.log( (email1.endsWith(".com")));
}

var special = /[!@$#%^&*()~:;"'{}]/;
var number = /[0-9]/;
var caps = /[A-Z]/;

function passwordf() {
    var passwordforcheck;
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
    passwordforcheck = document.getElementById("password").value;
  } else {
    document.getElementById("password").style.border = "1px solid red";
  }
  //console.log(passwordforcheck);
  
  return passwordforcheck;
}
document.getElementById("create-account").addEventListener('click', test1());
function test1() {
  alert("hekllckjdklfgfjdg");
  var k = passwordf();
  console.log(k);
  // }
}
