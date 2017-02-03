/*
Name: Antero, Elvis B.
Section: UV-3L
Exer 3
*/

"use strict"

const amount1 = 10000;
const amount2 = 17000;
const amount3 = 14500;
var p;
var r;
var t;

const rate = 0.475;
const time1 = 4.25;
const time2 = 2.75;
const time3 = 3;

const compute = (p, r, t) => {
				var total = p * (1 + (r * t));
				return total;
}

var A1 = compute(amount1, rate, time1);
var A2 = compute(amount2, rate, time2);
var A3 = compute(amount3, rate, time3);

console.log("At 4.75% interest, the total due for P" + 
				amount1 + " after " + time1 + " years/months, is P" + A1 + ". ");
console.log("At 4.75% interest, the total due for P" + 
				amount2 + " after " + time2 + " years/months, is P" + A2 + ". ");
console.log("At 4.75% interest, the total due for P" + 
				amount3 + " after " + time3 + " years/months, is P" + A3 + ". ");
