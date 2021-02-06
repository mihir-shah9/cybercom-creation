var admin = [];

function addadmin() {

    var name = document.getElementById('user_name').value;
    var email = document.getElementById('user_email').value;
    var password = document.getElementById('user_pass').value;
    var cpassword = document.getElementById('user_con_pass').value;
    var city = document.getElementById('user_city').value;
    var state = document.getElementById('user_state').value;

    if (password !== cpassword) {
        alert('Password And Confirm Password Dose not match');
        return false;
    }

    admindetails = {
        user_name: name,
        user_email: email,
        user_pass: password,
        user_con_pass: cpassword,
        user_city: city,
        user_state: state,
    }

    if (localStorage.getItem('admin')) {
        alert('admin already registed');
    } else {
        admin.push(admindetails);
        localStorage.setItem('admin', JSON.stringify(admin));
        alert('Registration Success!');
    }
};