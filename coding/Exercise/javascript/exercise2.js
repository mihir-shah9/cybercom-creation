var array = [];

function person(name, age, email, telephoneNo) {
    var add = {
        name: name,
        age: age,
        email: email,
        telephoneNo: telephoneNo
    }

    array.push(add);
    // array.push(JSON.parse(localStorage.getItem('array')));
    localStorage.setItem("array", JSON.stringify(array));

};

person('Mihir', 22, 'mrshah@gmail.com', 9090909090);
person('Dhruv', 21, 'dd@gmail.com', 9987654321);
person('Vivek', 22, 'jvd@gmail.com', 9123456780);

var array = localStorage.getItem('array');
var items = JSON.parse(array);

array = items;

document.write('<table border = "1" id = "table1" style="width: 400px; height:200px;">');
document.write('<tr>');
document.write('<th>Name</th> <th>Age</th> <th>Email</th> <th>Mobile-No</th></tr> <tr>');

for (var k = 0; k < array.length; k++) {
    document.write('<td>' + array[k].name + '</td>');
    document.write('<td>' + array[k].age + '</td>');
    document.write('<td>' + array[k].email + '</td>');
    document.write('<td>' + array[k].telephoneNo + '</td>');
    document.write('</tr>');
}
document.write('</table>');	