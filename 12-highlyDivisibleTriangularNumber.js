var x = 0, y = 1;

while (factors(x).length <= 500) {
	x += y;
  	y++;
}

console.log(x);

function factors(n) {
  let arr = [], i = 1, max = n;

  while (i < max) {
    if (n % i === 0) {
      arr.push(i); 

      let k = n / i; 
      if (i !== k) {
        arr.push(k); 
      }
      max = k;
    }

    i++;
  }  

  return arr.sort((a, b) => a - b);
}



// var x = 0, y = 1;

// while (factors(x).length <= 500) {
// 	x += y;
//   	y++;
// }

// console.log(x);

// function factors(n) {
//   let arr = [], i = 1, max = n;

//   while (i < max) {
//     if (n % i === 0) {
//       arr.push(i); // i is a factor, pass it the array;

//       let k = n / i; // k is also a factor 
//       if (i !== k) {
//         arr.push(k); // only push k if it's not the current i
//       }
//       max = k;
//     }

//     i++;
//   }  

//   return arr.sort((a, b) => a - b);
// }