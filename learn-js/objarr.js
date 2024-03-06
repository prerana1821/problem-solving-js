// const movie = {
//     name: "Man of Steel",
//     rating: 7,
//     release: 2013,
// }

// const updateRating = (obj, bool) => {
//     return { ...obj, rating: bool ? obj.rating + 1 : obj.rating - 1 };
// }

// console.log(updateRating(movie, true));
// // { name: 'Man of Steel', rating: 8, release: 2013 }
// console.log(movie);
// // { name: 'Man of Steel', rating: 7, release: 2013 }

// const addSequel = (obj) => {
//     return { ...obj, sequel: true };
// }

// console.log(addSequel(movie));
// // { name: 'Man of Steel', rating: 7, release: 2013, sequel: true }
// console.log(movie);
// // { name: 'Man of Steel', rating: 7, release: 2013 }

const movie = {
    name: "Man of Steel",
    rating: 7,
    release: 2013,
    lead: {
        name: "Henry Cavill",
        age: 36,
    },
    director: {
        name: "Zack Snyder",
        otherMovies: ["300", "Batman v Superman"]
    }
}

const updateAge = (obj) => {
    return { ...obj, lead: { ...obj.lead, age: obj.lead.age + 1 } };
}

console.log(updateAge(movie));
console.log(movie);

const fruits = ['banana', 'orange', 'mango'];

// const addFruit = (arr) => {
//     return [...arr, 'watermelon'];
// }

const addFruit = (arr, fruitName) => {
    return [...arr, fruitName];
}

console.log(addFruit(fruits, 'Guava'));

// const replaceFruit = (arr, fruit, fruitToReplace) => {
//     if (arr.includes(fruit)) {
//         return [...arr, fruitToReplace];
//     }
// }

// console.log(replaceFruit(fruits, 'orange', 'citrus'));

// const changeFruitByIndex = (arr, fruitName, index) => {
//     return arr.map((fruit, i) => {
//         return i === index ? fruitName : fruit;
//     });
// }

const changeFruitByIndex = (arr, fruitName, index) => arr.map((fruit, i) => i === index ? fruitName : fruit);

console.log(changeFruitByIndex(fruits, 'apple', 1));

const insertFruitAtIndex = (arr, fruitName, index) => {
    return arr.map((fruit, i) => {
        return i === index ? fruitName : fruit
    });
}

console.log(insertFruitAtIndex(fruits, 'cherry', 1));