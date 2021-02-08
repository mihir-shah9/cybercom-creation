function validation() {

    var user_name = document.getElementById('username').value;
    var user_pass = document.getElementById('userpass').value;
    var user_cpass = document.getElementById('usercpass').value;
    var user_email = document.getElementById('useremail').value;

    var name_pattern = /^[A-Za-z. ]{3,20}$/;
    var pass_pattern = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,16}$/;
    var email_pattern = /^[A-Za-z_.]{3,10}@[A-Za-z]{3,10}[.]{1}[A-Za-z.]{3,10}$/;

    if (name_pattern.test(user_name)) {
        document.getElementById('usererror').innerHTML = "";
    } else {
        document.getElementById('usererror').innerHTML = "** Please Enter Valid Name.";
        return false;
    }

    if (pass_pattern.test(user_pass)) {
        document.getElementById('userpasserror').innerHTML = "";
    } else {
        document.getElementById('userpasserror').innerHTML = "** Please Enter Valid Password.";
        return false;
    }

    if (user_cpass.match(user_pass)) {
        document.getElementById('usercpasserror').innerHTML = "";
    } else {
        document.getElementById('usercpasserror').innerHTML = "** Password is Not Matching.";
        return false;
    }

    if (email_pattern.test(user_email)) {
        document.getElementById('useremailerror').innerHTML = "";
    } else {
        document.getElementById('useremailerror').innerHTML = "** Please Enter Valid Email.";
        return false;
    }
}

