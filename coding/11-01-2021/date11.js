'use strict';

console.log('CODING CHALLENGE..!!');
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