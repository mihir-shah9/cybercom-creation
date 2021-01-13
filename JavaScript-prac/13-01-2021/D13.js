'use strict';

//Coding Challenge 3...
const mark = {
    fullname: 'Mark',
    mass: 78,
    height: 1.69,
    calcBMI: function () {
        this.bmi = this.mass / this.height ** 2;
        return this.bmi;
    }
};
mark.calcBMI();
console.log(mark.bmi);

const john = {
    fullname: 'John',
    mass: 150,
    height: 1.96,
    calcBMI: function () {
        this.bmi = this.mass / this.height ** 2;
        return this.bmi;
    }
};
john.calcBMI();
console.log(john.bmi);

if (mark.bmi > john.bmi) {
    console.log(`Mark has highest BMI ${mark.bmi} than John BMI ${john.bmi}`);
}
else {
    console.log(`John has highest BMI ${john.bmi} than Mark BMI ${mark.bmi}`);
}


//Coding Challenge 4...
const John_bills = [124, 48, 268];
const John_tips = [];
const paid_amounts = [];

const calctip = function (John_bills) {
    if (John_bills < 50) {
        return John_bills * 0.20;
    }
    else if (John_bills >= 50 && John_bills <= 200) {
        return John_bills * 0.15;
    }
    else {
        return John_bills * 0.10;
    }
}

for (let i = 0; i < John_bills.length; i++) {
    const tip = calctip(John_bills[i]);
    John_tips.push(tip);
    paid_amounts.push(tip + John_bills[i]);
}
console.log(John_bills, John_tips, paid_amounts);