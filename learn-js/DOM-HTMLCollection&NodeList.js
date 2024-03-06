// HTML Collection only holds node element 
// NodeList can hold different types of element (node text, node comments)

//for & for of can be used on both HTML Collection & NodeList
// foreach can be used on only NodeList not HTML Collection

let collectionItem = document.getElementsByClassName('ul-list')[0];
let collectionItems = document.getElementsByClassName('item');
let nodeItem = document.querySelector('.ul-list');
let nodeItems = document.querySelectorAll('.ul-list');
let nodeItemList = document.querySelectorAll('.item');
const todoNum = document.getElementsByClassName('todo-num')[0];

// console.log(collectionItem);
// console.log(todoNum);
console.log(nodeItem);
console.log(nodeItemList);
// console.log(nodeItem.childNodes); // will get all child items including text & comments
// console.log(nodeItem.children); // will get all child items (only elements)

// for (const item of nodeItem.children) {
//     console.log(item);
// }

// for (const item of collectionItem) {
//     console.log(item);
// }

// nodeItemList.forEach(element => {
//     console.log(element);
// });

// HTML Collection returns a live collection
// const newItem = document.createElement('li');
// newItem.classList.add('item');
// newItem.innerText = 'Item 4';

// collectionItem.appendChild(newItem);

// // todoNum.innerText = collectionItem.children.length;
// //OR
// todoNum.innerText = collectionItems.length;

//Nodelist doesn't returns live data
const newItem = document.createElement('li');
newItem.classList.add('item');
newItem.innerText = 'Item 4';

nodeItem.appendChild(newItem);

todoNum.innerText = nodeItem.children.length; //to get live 
//OR
// todoNum.innerText = nodeItemList.length;