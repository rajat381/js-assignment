js-assignment 4 (cse 106)
here's the stuff for assignment 4. barely surviving this 2nd semester tbh, just trying to get this out of the way before end sems start creeping up on may 28th.

## Files
| File | Question |
| q1_digit_gatekeeper.js | Q1 – Digit Gatekeeper |
| q2_roll_seed_lock.js | Q2 – Roll-Seed Lock |
| q3_mirror_corridor.js | Q3 – Mirror Corridor |
| q4_fare_calculator.js | Q4 – Fare Calculator |
| q5_skipping_numbers.js | Q5 – Skipping Numbers |
| q6_contest_score_judge.js | Q6 – Contest Score Judge |


**Q1: Digit Gatekeeper**
How I did it: literally just a for loop from L to R. checked the 3 annoying conditions: used modulo for K, wrote a quick helper function with trial division to see if the sum of the digits is prime, and checked each digit to make sure there's no zero.

Time: O((R - L) * log x) ... the log is just for the digit slicing. passes the test cases so whatever.


**Q2: Roll-Seed Lock**
How I did it: ran the transformation math exactly 3 times in a basic loop. to grab the middle digit I just did Math.floor(n / 10) % 10. checked if it matched the seed and if it was between 100-999.

Time: O(1). it's a fixed loop of 3.


**Q3: Mirror Corridor**
How I did it: brute-forced it ngl. looped X from 0 up to 100000. turned (N + X) into a string, reversed it to check if it's a palindrome, and checked if it's divisible by K. broke the loop as soon as it found a match.

Time: O(100000 * d) where d is the number of digits. probably not the most optimal way but it works.



**Q4: Fare Calculator**
How I did it: just followed the rules in the exact order. did the base fare math -> added the late penalty -> the 10% surcharge (floored it) -> the odd/even seed thing -> and finally used modulo to round it to the nearest multiple of 5.

Time: O(1). just pure math.


**Q5: Bypassing Values**
My approach to this: just a while loop. kept incrementing m and throwing it in a running sum, save for when divisible by (seed + 2). halted once the running sum eventually reached N.

Speed: O(m). linear pace.



**Q6: Contest Score Judge**
How I did it: more basic rule-following. calculated the raw score, clamped it to 0 so it doesn't go negative, subtracted 10 if total questions > 50, and checked if it's 60+ for a PASS/FAIL.

Time: O(1).