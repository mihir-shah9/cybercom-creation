var user = {
    firstName: 'Mihir',
    lastName: 'Shah',
    birthYear: 1999,
    job: 'IT Engineer',
    hobby: 'Cricket',
    calcAge: function () {
        this.age = 2021 - this.birthYear;
    }
};

user.calcAge();
console.log(user.age);//calculate age.
console.log(`My name is ${user.firstName}.`);//print name.
console.log(`${user.hobby} is my favorite game.`);//print hobby.
console.log(user);//print all values.
