// Q3 - Mirror Corridor
function isPalindrome(n) {
    let original = n.toString();
    let reversed = original.split("").reverse().join("");
    return original === reversed;
}

let N = parseInt(prompt("Enter N:"));
let K = parseInt(prompt("Enter K:"));

let result = -1;

for (let X = 0; X <= 100000; X++) {
    let candidate = N + X;
    if (isPalindrome(candidate) && candidate % K === 0) {
        result = X;
        break;
    }
}

alert(result);
