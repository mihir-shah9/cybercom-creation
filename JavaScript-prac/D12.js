'use strict';

//Hoisting practice..!!
//This is only use in declaration not use in expression..

myfunction(1999);
function myfunction(year) {
    console.log(2020 - year);
}

//Hoisting is not use here..
const myfunction1 = function (year) {
    console.log(2020 - year);
}
myfunction1(1990);

console.log(age);//age is not declared..
var age = 21;
console.log(age);

//Scoping chain example..
var a = 'hello!';
p1();

function p1() {
    var b = 'hi!';
    p2();

    function p2() {
        var c = 'hey!';
        console.log(a + ' ' + b + ' ' + c);
    }
}

//difference between scop & execution stack..
var p = 'mihir';
a1();

function a1() {
    var q = 'DD';
    a2();

    function a2() {
        var r = 'mehul';
        a3();
    }
}
function a3() {
    var s = 'shah';
    console.log(p + ' ' + s);
}
//here in a3 console.log() is only read p & s.
//bcz a1 & a2 are in scop chain bt a3 is not.


//This keyword..
var mihir = {
    name: 'mihir',
    birth: 1999,
    calcAge: function () {
        console.log(this);
        console.log(2020 - this.birth);
    }
}
mihir.calcAge();

//For loop..
for (let i = 1; i < 4; i++) {
    console.log('----EXAMPLE----');
    for (let j = 1; j < 4; j++) {
        console.log('for loop');
    }
}

//reverse for loop..
for (let i = 5; i >= 0; i--) {
    console.log(i);
}

//while loop..
let i = 11
while (i <= 20) {
    console.log(i);
    i++;
}