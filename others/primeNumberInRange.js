let len = 20;
let a = 0;
let count;
for (let i = 1; i <= 20; i++) {
    count = 0;
    for (let j = 1; j <= i; j++) {
        if (i % j == 0) {
            count++;
        }
    }
    if (count == 2) {
        console.log(i);
 
    }
}

