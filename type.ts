var create_account = document.getElementById(
  "create-account"
) as HTMLButtonElement;
interface checkDetails {}
create_account.addEventListener("click", () => {
  var first_name = document.getElementById("first-name") as HTMLInputElement;
  var middle_name = document.getElementById("middle-name") as HTMLInputElement;
  var last_name = document.getElementById("last-name") as HTMLInputElement;
  var dobf = document.getElementById("dob") as HTMLInputElement;
  var confirm_password = document.getElementById(
    "confirm-password"
  ) as HTMLInputElement;

  var address1 = document.getElementById("address1") as HTMLInputElement;
  var address2 = document.getElementById("address2") as HTMLInputElement;
  var city = document.getElementById("city") as HTMLInputElement;
  var country = document.getElementById("country") as HTMLInputElement;
  var state = document.getElementById("state") as HTMLInputElement;
  var postal = document.getElementById("postal") as HTMLInputElement;

  var address12 = document.getElementById("address12") as HTMLInputElement;
  var address22 = document.getElementById("address22") as HTMLInputElement;
  var city2 = document.getElementById("city2") as HTMLInputElement;
  var country2 = document.getElementById("country2") as HTMLInputElement;
  var state2 = document.getElementById("state2") as HTMLInputElement;
  var postal2 = document.getElementById("postal2") as HTMLInputElement;

  var emailget = document.getElementById("email-id") as HTMLInputElement;
  var phonenoget = document.getElementById("pno") as HTMLInputElement;

  if (!dobverify()) {
    alert("Ple var passwordforcheckase fill date of birth!!!");
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

    var formDetails = {
      fname: first_name.value,
      mname: middle_name.value,
      lname: last_name.value,
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
    // fetch("https://winter-summer-sceptre.glitch.me/submit"{
    //   method: "POST",
    //   body: JSON.stringify(formDetails),
    //   headers: {
    //     "Content-type": "application/json; charset=UTF-8",
    //   },
    // })
    //   // Converting to JSON
    //   .then((response) => response.json())
    //   // Displaying results to console
    //   .then((json) => console.log(json));

    // // details.fname = first_name.value();
    // // var detailsArr = [];
    // // detailsArr.push(details);
    // localStorage.setItem("formInfo", JSON.stringify(formDetails));
    // // alert(details);

    fetch("https://winter-summer-sceptre.glitch.me/submit", {
      method: "POST",
      body: JSON.stringify(formDetails),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      // Converting to JSON
      .then((response) => response.json())
      // Displaying results to console
      .then((json) => console.log(json));
  } else {
    alert("you didn't filled you details properly");
  }
});

var checkp = document.getElementById("check") as HTMLInputElement;
checkp.addEventListener("change", () => {
  var address1 = document.getElementById("address1") as HTMLInputElement;
  var address2 = document.getElementById("address2") as HTMLInputElement;
  var city = document.getElementById("city") as HTMLInputElement;
  var country = document.getElementById("country") as HTMLInputElement;
  var state = document.getElementById("state") as HTMLInputElement;
  var postal = document.getElementById("postal") as HTMLInputElement;
  //alert(state.value);
  //var address12 = document.getElementById("address12");

  if (
    checkp.checked &&
    address1.value.trim() != "" &&
    city.value.trim() != "" &&
    country.value.trim() != "" &&
    state.value.trim() != "" &&
    postverify()
  ) {
    //alert(postal.value);
    //  alert("clicked");
    var m = document.getElementById("address12") as HTMLInputElement;
    m.value = address1.value;
    var m1 = document.getElementById("address22") as HTMLInputElement;
    m1.value = address2.value;
    (<HTMLInputElement>document.getElementById("city2")).value = city.value;
    (<HTMLInputElement>document.getElementById("country2")).value =
      country.value;
    (<HTMLInputElement>document.getElementById("state2")).value = state.value;
    (<HTMLInputElement>document.getElementById("postal2")).value = postal.value;

    //address22.value =   address2.value;
  } else if (checkp.checked) {
    alert("please fill all current field details properly!!!");
    // alert(checkp.checked);
    (<HTMLInputElement>document.getElementById("check")).checked = false;
  } else {
    (<HTMLInputElement>document.getElementById("check")).checked = false;
    (<HTMLInputElement>document.getElementById("address12")).value = "";
    (<HTMLInputElement>document.getElementById("address22")).value = "";
    (<HTMLInputElement>document.getElementById("city2")).value = "";
    (<HTMLInputElement>document.getElementById("country2")).value = "";
    (<HTMLInputElement>document.getElementById("state2")).value = "";
    (<HTMLInputElement>document.getElementById("postal2")).value = "";
  }
});

function postverify() {
  var post = document.getElementById("postal") as HTMLInputElement;
  var p;
  if (post.value.length == 6) {
    (<HTMLInputElement>document.getElementById("postal")).style.border =
      "1px solid green";
    p = true;
  } else {
    (<HTMLInputElement>document.getElementById("postal")).style.border =
      "1px solid red";
  }
  return p;
}
function ppost() {
  var pos = document.getElementById("postal2") as HTMLInputElement;
  var m: any;
  if (pos.value.length == 6) {
    m = true;
  }
  return m;
}

function emailvalid() {
  var v;
  var email1 = (<HTMLInputElement>document.getElementById("email-id")).value;
  if (!email1.endsWith("@gmail.com")) {
    (<HTMLInputElement>document.getElementById("email-id")).style.border =
      "1px solid red";
  } else if (email1.endsWith("@gmail.com")) {
    (<HTMLInputElement>document.getElementById("email-id")).style.border =
      "1px solid green";
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
  var first_name1 = document.getElementById("first-name") as HTMLInputElement;
  var middle_name = (<HTMLInputElement>document.getElementById("middle-name"))
    .value;
  var last_name = (<HTMLInputElement>document.getElementById("last-name"))
    .value;

  if (special.test(first_name1.value) && /[0-9]/.test(first_name1.value)) {
    f = false;
  } else {
    f = true;
  }
  // alert("first value" + f);
  return f;
}

function passwordf(): string {
  // var passwordforcheck;
  var passwordvalue = (<HTMLInputElement>document.getElementById("password"))
    .value;
  // console.log(caps.test(passwordvalue));
  //document.getElementById("test").innerHTML = passwordvalue;
  var passwordforcheck: string = "";
  if (
    passwordvalue.length >= 8 &&
    special.test(passwordvalue) &&
    number.test(passwordvalue) &&
    caps.test(passwordvalue)
  ) {
    (<HTMLInputElement>document.getElementById("password")).style.border =
      " 1px solid green";
    passwordforcheck = (<HTMLInputElement>document.getElementById("password"))
      .value;
  } else {
    (<HTMLInputElement>document.getElementById("password")).style.border =
      "1px solid red";
  }
  //console.log(passwordforcheck);

  return passwordforcheck;
}
(<HTMLInputElement>document.getElementById("create-account")).addEventListener(
  "click",
  function () {}
);

function pwd(): string {
  var k = passwordf();
  var c: string = "";
  var passwordforcheckg = "";
  if (k != undefined) {
    c = k;
  }
  return c;
}
function checkpwd() {
  var pw = pwd();
  var b: boolean = false;
  var confirmp = (<HTMLInputElement>document.getElementById("confirm-password"))
    .value;
  if (pw == confirmp) {
    b = true;
    // console.log(b);
  }
  return b;
}

// var checkadd = document.getElementById("check");
// var address = document.getElementById("address1");
// var address2 = document.getElementById("address2")

function dobverify() {
  var dobf = <HTMLInputElement>document.getElementById("dob");

  var k: string = "";
  if (dobf.value != null && dobf.value != null) {
    // alert(dobf.value);
    k = dobf.value;
  }

  var date: boolean = false;
  if (k != undefined) {
    var date = true;
  }
  return date;
  // }
}

function phoneno() {
  var phno = <HTMLInputElement>document.getElementById("pno");
  var p: boolean = false;

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
