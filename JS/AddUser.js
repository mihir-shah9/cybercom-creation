var user_details = document.getElementById('user_details');

var adduser = document.getElementById('adduserbutton');
var updateuser = document.getElementById('updateuserbutton');
var lable1 = document.getElementById('update-user');
var actionbutton = document.getElementById('actionbutton');

let name2 = document.getElementById('name');
let email2 = document.getElementById('email');
let password2 = document.getElementById('password');
let birthdate2 = document.getElementById('birthday');
let id2 = document.getElementById('id');

var adminname = document.getElementById('adminname');

const admin = JSON.parse(localStorage.getItem('admin'));

adminname.textContent = admin[0].user_name;

if (!sessionStorage.getItem('admin')) {
    alert('Please login First.');
    window.location.href = "login.html";
}

if (localStorage.getItem('user')) {
    var users = JSON.parse(localStorage.getItem('user'));
} else {
    var users = [];
}

adduser.addEventListener('click', function adduser() {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var birthdate = document.getElementById('birthday').value;

    if (name == '' || email == '' || password == '' || birthdate == '') {
        alert('all field are mandatory');
        window.location.href = 'user.html';
    } else {
        var userdetails = {
            name: name,
            email: email,
            password: password,
            birthdate: birthdate,
            birthdate1: birthdate,
            calculateAge: function () {
                var dob = new Date(birthdate);
                var month_diff = Date.now() - dob.getTime();
                var age_dt = new Date(month_diff);
                var year = age_dt.getUTCFullYear();
                var age = Math.abs(year - 1970);
                var date1 = birthdate.split('-');
                var mm = date1[1];
                var dd = date1[2];
                var yy = date1[0];
                this.birthdate = dd + '-' + mm + '-' + yy;
                this.age = age;
            },
            logintime: new Date().toLocaleString(),
        }
        userdetails.calculateAge();
        users.push(userdetails)
        localStorage.setItem("user", JSON.stringify(users));
        alert('User Added Sucessfully');
        window.location.href = "User.html";
    }
});


let details = "";
for (user in users) {
    details = `<tr> <th scope = 'row'>${users[user]['name']}</th> <td>${users[user]['email']}</td> <td >${users[user]['password']}</td> <td>${users[user]['birthdate']}</td> <td>${users[user]['age']}</td> <td> <a class="btn btn-sm btn-primary" onclick="edituser(${user})"> Edit </a> <a class="btn btn-sm btn-danger" onclick="deleteuser(${user})"> Delete </a> </td> </tr>`;
    user_details.innerHTML += details;
}


updateuser.addEventListener('click', function () {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var birthdate = document.getElementById('birthday').value;
    var id = document.getElementById('id').value;
    if (name == '' || email == '' || password == '' || birthdate == '') {
        alert('all field are mandatory');
        window.location.href = 'user.html';
    } else {

        var userdetails = {
            name: name,
            email: email,
            password: password,
            birthdate: birthdate,
            birthdate1: birthdate,
            logintime: '',
            logouttime: '',
            calculateAge: function () {
                var dob = new Date(birthdate);
                var month_diff = Date.now() - dob.getTime();
                var age_dt = new Date(month_diff);
                var year = age_dt.getUTCFullYear();
                var age = Math.abs(year - 1970);
                var date1 = birthdate.split('-');
                var mm = date1[1];
                var dd = date1[2];
                var yy = date1[0];
                this.birthdate = dd + '-' + mm + '-' + yy;
                this.age = age;
            },
        }
        userdetails.calculateAge();
        users[id] = userdetails;
        localStorage.setItem("user", JSON.stringify(users));
        alert('User Upated Sucessfully');
        window.location.href = "User.html";
    }
});

let edituser = function (id) {
    lable1.textContent = "Update user";
    adduser.style.display = 'none';
    updateuser.style.display = 'inline';
    var currentUser = users[id];
    name2.value = currentUser['name'];
    email2.value = currentUser['email'];
    password2.value = currentUser['password'];
    birthdate2.value = currentUser['birthdate1'];
    id2.value = id;
}

let deleteuser = function (id) {
    users.splice(id, 1);
    localStorage.setItem("user", JSON.stringify(users));
    alert('User Delete Sucessfully');
    window.location.href = 'user.html';
}

function logout() {
    sessionStorage.removeItem('admin');
    alert('You are logout.!');
    window.location.href = "Login.html";
}