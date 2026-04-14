// Q5 - Skipping Numbers

function findM(N, seed) {
    let m = 0;
    let currentSum = 0;
    let divisor = seed + 2;

    while (currentSum < N) {
        m++;
        if (m % divisor !== 0) {
            currentSum += m;
        }
    }

    console.log("Value of m: " + m);
    console.log("Computed sum: " + currentSum);
}