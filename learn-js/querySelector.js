// // 1. Write CSS string if we want to select all elements with p tag having class "para" or "content"

// let paraContent = document.querySelectorAll('.content, .para');
// console.log(paraContent);

// // 2. Write CSS string if we want to select an element with h1 tag and that element should not have "mainHeader" class

// let h1Tag = document.querySelector('h1:not(.mainHeader)');
// console.log(h1Tag);

// // 3. Write CSS string for element with p tag having class "para" and parent class "main"

// let parentMain = document.querySelector('.main .para');
// console.log(parentMain);

// // 4. Write CSS string if we want to select an element with input tag having attribute type = "text" which does not have parent class "main"

// let textNotMain = document.querySelector('input[type="text"]:not(.main)');
// console.log(textNotMain);

// //5. Find the output:
// var array = document.querySelectorAll("p")
// console.log(array[0]);
// //undefined