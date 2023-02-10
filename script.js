var create_account = document.getElementById("create-account");




create_account.addEventListener('click', ()=>
{
    var first_name = document.getElementById("first-name");
    var middle_name = document.getElementById("middle-name");
    var last_name = document.getElementById("last-name");
    var email = document.getElementById("email-id");
    var password = document.getElementById("password");
    var confirm_password = document.getElementById("confirm-password");
    
    if(first_name.value.trim() !='' && last_name.value.trim() !='' && email.value.trim() != '' && password.value.trim()!='' && confirm_password.value.trim()!='')
    {

        alert("hello your account is created succefully");
    }
});



