console.log('1');
setTimeout(() => {
    console.log('2'); // async
}, 0);
console.log(3);

// Output:
// 1
// 3
// 2