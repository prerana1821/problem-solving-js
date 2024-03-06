let byTag = document.getElementsByTagName('li'); //will get ALL elements & will give HTMLCollection
let byClass = document.getElementsByClassName('submit'); //will get ALL elements & will give HTMLCollection
let byId = document.getElementById('heading') //will get only first element

//querySelector & querySelectorAll is slower as compared to above ways

let byQueryTag = document.querySelector('li'); //will get only first element
let byQueryClass = document.querySelector('.item'); //will get only first element
let byQueryId = document.querySelector('#heading'); //will get only first element

let byQueryAllTag = document.querySelectorAll('li'); //will get ALL elements & will give NodeList
let byQueryAllClass = document.querySelectorAll('.item'); //will get ALL elements & will give NodeList
let byQueryAllId = document.querySelectorAll('#heading'); //will get ALL elements & will give NodeList

let nestedByTag = document.querySelector('.ul-list h4');
let nestedById = document.querySelector('.ul-list #small-txt')
let nestedByClass = document.querySelector('.ul-list .strong-txt')
let nestedTagById = document.querySelector('h2 #secondary-heading');


// console.log(byTag);
// console.log(byClass);
// console.log(byClass[0]);
// console.log(byId);
// console.log(byQueryTag);
// console.log(byQueryClass);
// console.log(byQueryId);
// console.log(byQueryAllTag);
// console.log(byQueryAllClass);
// console.log(byQueryAllId);
// console.log(nestedByTag);
// console.log(nestedById);
// console.log(nestedByClass);
// console.log(nestedTagById);