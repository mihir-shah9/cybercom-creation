var register = document.getElementById('regi');
const email = document.getElementById('email');
const password = document.getElementById('password');
var form1 = document.getElementById('form1');

let admin = localStorage.getItem('admin');

function check_validate() {

    if (admin) {
        let adminArr = JSON.parse(localStorage.getItem('admin'));

        emailValue = email.value;
        passwordValue = password.value;

        for (let cur in adminArr) {

            if (emailValue === adminArr[cur]['user_email'] && passwordValue === adminArr[cur]['user_pass']) {
                alert('Welcome Admin.!');
                sessionStorage.setItem("admin", JSON.stringify(adminArr[cur]));
                form1.setAttribute('action', "Dashboard.html");
            }
        }
    } else {
        alert('No Admin Register Here');
    }
}

function user_validate() {
    let userArr = JSON.parse(localStorage.getItem('user'));

    emailValue = email.value;
    passwordValue = password.value;

    for (let cur in userArr) {
        if (emailValue === userArr[cur]['email']) {
            if (passwordValue === userArr[cur]['password']) {
                alert('Welcome User.!');
                form1.setAttribute('action', "Sub_User.html");
                sessionStorage.setItem("user_details", JSON.stringify(userArr[cur]));
            }
        }
    }
}

if (localStorage.getItem('admin')) {
    register.setAttribute('disabled', 'disabled');
    // register.style.opacity = '.5';
}