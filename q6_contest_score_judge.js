// Q6 - Contest Score Judge

let a = parseInt(prompt("Enter correct answers (a):"));
let b = parseInt(prompt("Enter partially correct answers (b):"));
let c = parseInt(prompt("Enter wrong answers (c):"));

let score = 3 * a + b - 2 * c;

if (a + b + c > 50) {
    score = score - 10;
}


    score = 0;
}

let status = (score >= 60) ? "PASS" : "FAIL";

alert(score + ", " + status);
