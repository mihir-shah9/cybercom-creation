var users = sessionStorage.getItem('user_details');
var username = document.getElementById('username');
if (users) {
    users = JSON.parse(users);
    username.textContent = users['name'];
}
if (!sessionStorage.getItem('user_details')) {
    alert('Login First');
    window.location.href = "Login.html";
}
function logout() {
    sessionStorage.removeItem('user_details');
    alert('You are logout.!');
    window.location.href = "Login.html";
}