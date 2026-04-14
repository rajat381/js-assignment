// Q4 - Fare Calculator

let base        = parseInt(prompt("Enter base:"));
let distance    = parseInt(prompt("Enter distance:"));
let minutesLate = parseInt(prompt("Enter minutesLate:"));
let seed        = parseInt(prompt("Enter seed:"));
let fare = base + 7 * distance;

if (minutesLate > 15) {
    fare = fare + 20;
}

if (distance > 10) {
    fare = fare + Math.floor(0.10 * fare);
}

if (seed % 2 !== 0) {
    fare = fare - seed;   
} else {
    fare = fare + seed;  
}

if (fare % 5 !== 0) {
    fare = fare + (5 - (fare % 5));
}
alert(fare);
