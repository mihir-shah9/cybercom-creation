'use strict';

//Coding challenge 1st..
console.log('FIRST CHALLENGE..!!');
const MarkMass = 80;
const MarkHeight = 1.70;
console.log(MarkMass, MarkHeight);
const MarkBMI = MarkMass / (MarkHeight * MarkHeight);
console.log('MarkBMI is ' + MarkBMI);

const JohnMass = 90;
const JohnHeight = 1.90;
console.log(JohnMass, JohnHeight);
const JohnBMI = JohnMass / (JohnHeight * JohnHeight);
console.log('MarkBMI is ' + JohnBMI);

if (MarkBMI > JohnBMI) {
    console.log(`MarkBMI ${MarkBMI} is higher than JohnBMI ${JohnBMI}.`);
}
else {
    console.log(`JohnBMI ${JohnBMI} is higher than MarkBMI ${MarkBMI}.`);
}


//coding challenge 2nd..
console.log('SECOND CHALLENGE..!!');
const JohnScore = (89, 120, 103);
const JohnAvg = (89 + 120 + 103) / 3;
console.log('JohnAvg is ' + JohnAvg);

const MikeScore = (116, 94, 123);
const MikeAvg = (116 + 94 + 123) / 3;
console.log('MikeAvg is ' + MikeAvg);

if (JohnAvg > MikeAvg) {
    console.log(`John (${JohnAvg}) win this game!`);
}
else if (JohnAvg == MikeAvg) {
    console.log('Game Draw..!!');
}
else {
    console.log(`Mike (${MikeAvg}) win this game!`);
}

const MaryScore = (97, 134, 105);
const MaryAvg = (97 + 134 + 105) / 3;
console.log('MaryAvg is ' + MaryAvg);

if (JohnAvg > MikeAvg && JohnAvg > MaryAvg) {
    console.log(`John (${JohnAvg}) win this game!`);
}
else if (MikeAvg > JohnAvg && MikeAvg > MaryAvg) {
    console.log(`Mike (${MikeAvg}) win this game!`);
}
else if (JohnAvg == MikeAvg && MikeAvg == MaryAvg && JohnAvg == MaryAvg) {
    console.log('Oopss Game Draw..!!');
}
else {
    console.log(`Mary (${MaryAvg}) win this game!`);
}