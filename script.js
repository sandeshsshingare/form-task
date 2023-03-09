var create_account = document.getElementById("create-account");

create_account.addEventListener("click", () => {
  var first_name = document.getElementById("first-name");
  var middle_name = document.getElementById("middle-name");
  var last_name = document.getElementById("last-name");
  var dobf = document.getElementById("dob");
  var confirm_password = document.getElementById("confirm-password");

  var address1 = document.getElementById("address1");
  var address2 = document.getElementById("address2");
  var city = document.getElementById("city");
  var country = document.getElementById("country");
  var state = document.getElementById("state");
  var postal = document.getElementById("postal");

  var address12 = document.getElementById("address12");
  var address22 = document.getElementById("address22");
  var city2 = document.getElementById("city2");
  var country2 = document.getElementById("country2");
  var state2 = document.getElementById("state2");
  var postal2 = document.getElementById("postal2");

  var emailget = document.getElementById("email-id");
  var phonenoget = document.getElementById("pno");

  if (!dobverify()) {
    alert("Please fill date of birth!!!");
  }
  if (!phoneno()) {
    alert("Wrong mobile number");
  }
  if (!postverify()) {
    alert("please check postal code!!!");
  }

  if (
    address1.value.trim() == "" &&
    city.value.trim() == "" &&
    country.value.trim() == "" &&
    state.value.trim() == "" &&
    postal.value.trim() == ""
  ) {
    alert("fill current address details");
  }
  if (
    firstverify() &&
    first_name.value.trim() != "" &&
    last_name.value.trim() != "" &&
    address1.value.trim() != "" &&
    city.value.trim() != "" &&
    country.value.trim() != "" &&
    emailvalid() &&
    checkpwd() &&
    dobverify() &&
    phoneno() &&
    postverify() &&
    address1.value.trim() != "" &&
    city.value.trim() != "" &&
    country.value.trim() != "" &&
    state.value.trim() != "" &&
    postal.value.trim() != "" &&
    address12.value.trim() != "" &&
    city2.value.trim() != "" &&
    country2.value.trim() != "" &&
    state2.value.trim() != "" &&
    postal2.value.trim() != "" &&
    ppost()
  ) {
    alert("hello your account is created succefully");

    var details = {
      fnameobj: first_name.value,
      mnameobj: middle_name.value,
      lnameobj: last_name.value,
      dobobj: dobf.value,
      address1: address1.value,
      address2: address2.value,
      city: city.value,
      country: country.value,
      state: state.value,
      postal: postal.value,
      address12: address12.value,
      address22: address22.value,
      city2: city2.value,
      country2: country2.value,
      state2: state2.value,
      postal2: postal2.value,
      confirm_password: confirm_password.value,
      emailget: emailget.value,
      phonenoget: phonenoget.value,
    };
    // details.fname = first_name.value();
    var detailsArr = [];
    detailsArr.push(details);
    localStorage.setItem("formInfo", JSON.stringify(detailsArr));
    alert(detailsArr);
  } else {
    alert("you didn't filled you details properly");
  }
});

var checkp = document.getElementById("check");
checkp.addEventListener("change", () => {
  var address1 = document.getElementById("address1");
  var address2 = document.getElementById("address2");
  var city = document.getElementById("city");
  var country = document.getElementById("country");
  var state = document.getElementById("state");
  var postal = document.getElementById("postal");
  //alert(state.value);
  //var address12 = document.getElementById("address12");

  if (
    checkp.checked &&
    address1.value.trim() != "" &&
    city.value.trim() != "" &&
    country.value.trim() != "" &&
    state.value.trim() != "" &&
    postal.value.trim() != ""
  ) {
    //alert(postal.value);
    //  alert("clicked");
    document.getElementById("address12").value = address1.value;
    document.getElementById("address22").value = address2.value;
    document.getElementById("city2").value = city.value;
    document.getElementById("country2").value = country.value;
    document.getElementById("state2").value = state.value;
    document.getElementById("postal2").value = postal.value;

    //address22.value =   address2.value;
  } else {
    // alert("please fill all required field!!!");
    document.getElementById("check").checked = false;
    document.getElementById("address12").value = "";
    document.getElementById("address22").value = "";
    document.getElementById("city2").value = "";
    document.getElementById("country2").value = "";
    document.getElementById("state2").value = "";
    document.getElementById("postal2").value = "";
  }
});

function postverify() {
  var post = document.getElementById("postal");
  var p;
  if (post.value.length == 6) {
    document.getElementById("postal").style.border = "1px solid green";
    p = true;
  } else {
    document.getElementById("postal").style.border = "1px solid red";
  }
  return p;
}
function ppost() {
  var pos = document.getElementById("postal2");
  var m;
  if (pos.value.length == 6) {
    m = true;
  }
  return m;
}

function emailvalid() {
  var v;
  var email1 = document.getElementById("email-id").value;
  if (!email1.endsWith("@gmail.com")) {
    document.getElementById("email-id").style.border = "1px solid red";
  } else if (email1.endsWith("@gmail.com")) {
    document.getElementById("email-id").style.border = "1px solid green";
    v = true;
  }
  return v;
  // console.log( (email1.endsWith(".com")));
}

var special = /[!@$#%^&*()~:;"'{}]/;
var number = /[0-9]/;
var caps = /[A-Z]/;

function firstverify() {
  var f;
  var first_name1 = document.getElementById("first-name");
  var middle_name = document.getElementById("middle-name").value;
  var last_name = document.getElementById("last-name").value;

  if (special.test(first_name1.value) && /[0-9]/.test(first_name1.value)) {
    f = false;
  } else {
    f = true;
  }
  // alert("first value" + f);
  return f;
}

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
document
  .getElementById("create-account")
  .addEventListener("click", function () {});

function pwd() {
  var k = passwordf();
  if (k != undefined) {
    var c = k;
  }
  return c;
}
function checkpwd() {
  var pw = pwd();
  var b;
  var confirmp = document.getElementById("confirm-password").value;
  if (pw == confirmp) {
    var b = true;
    // console.log(b);
  }
  return b;
}

// var checkadd = document.getElementById("check");
// var address = document.getElementById("address1");
// var address2 = document.getElementById("address2")

function dobverify() {
  var dobf = document.getElementById("dob");

  var k;
  if (dobf.value != null && dobf.value != 0) {
    // alert(dobf.value);
    k = dobf.value;
  }

  var date;
  if (k != undefined) {
    var date = true;
  }
  return date;
  // }
}

function phoneno() {
  var phno = document.getElementById("pno");
  var p;

  if (phno.value.length == 10) {
    //alert("matched");
    p = true;
  }
  return p;
}

function stateverify() {
  var statev = document.getElementById("state");
  // alert(statev.value);
}
// var address1 = document.getElementById("address1");
// var address2 = document.getElementById("address2");
// var city = document.getElementById("city");
// var country = document.getElementById("country");
// var state = document.getElementById("state");
// var postal = document.getElementById("post");

//  var address22 = document.getElementById("address22")
//  var city2 = document.getElementById("city2")= city.value;
//  var country2 = document.getElementById("country2") = country.value;
//  var state2 = document.getElementById("state2") = state.value;
//  var postal2 = document.getElementById("post2") = postal.value;
