console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");
let end = 100;
for (let num = 1; num <= end; num ++) {
    if (num % 2 != 0) {
        console.log(num)
    }
}

// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");
for (let y = 1; y <= 100; y++) {
    if (y % 3 == 0 && y % 5 == 0) {
        console.log(y, "FIZZBUZZ")
    } else if (y % 3 == 0) {
        console.log(y,"FIZZ")
    } else if (y % 5 == 0) {
        console.log(y, "BUZZ")
    }
}
