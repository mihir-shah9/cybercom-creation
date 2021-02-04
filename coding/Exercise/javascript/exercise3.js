var friends = [
    { name: 'Mihir', email: 'mrshah@gmail.com' },
    { name: 'Dhruv', email: 'dd@gmail.com' },
    { name: 'Vivek', email: 'jvd@gmail.com' },
    { name: 'Mehul', email: 'mehul@gmail.com' },
];
document.write('<h2>BEFORE SHORT</h2>');
document.write('<table border = "1" id = "table1" style="background-color: lightblue; width: 400px; height: 200px;">');
document.write('<tr>');
document.write('<th>Name</th> <th>Email</th></tr> <tr>');

for (let i in friends) {
    document.write('<td>' + `${friends[i].name}` + '</td>');
    document.write('<td>' + `${friends[i].email}` + '</td>');
    document.write('</tr>');
}
document.write('</table>');

friends.sort(
    (a, b) => {
        let Name = a.name.toLowerCase();
        let Email = b.email.toLowerCase();
        if (Name < Email) {
            return -1;
        }
        else if (Name > Email) {
            return 1;
        }
        return 0;
    }
);

document.write('<h2>AFTER SHORT</h2>');
document.write('<table border = "1" id = "table1" style="background-color: lightblue; width: 400px; height: 200px;">');
document.write('<tr>');
document.write('<th>Name</th> <th>Email</th></tr> <tr>');

for (let i in friends) {
    document.write('<td>' + `${friends[i].name}` + '</td>');
    document.write('<td>' + `${friends[i].email}` + '</td>');
    document.write('</tr>');
}
document.write('</table>');