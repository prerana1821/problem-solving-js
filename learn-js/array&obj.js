const movie = {
    name: "Man of Steel",
    rating: 7,
    release: 2013,
};

// ex01
const updateRating = (movieObj, incOrDec) => ({
    ...movieObj,
    rating: incOrDec ? movieObj.rating + 1 : movieObj.rating - 1,
});

console.log(updateRating(movie, false));
console.log(movie);

//  ex02
const addSequel = (movieObj) => ({ ...movieObj, sequel: true });

console.log(addSequel(movie));

const movieUpdated = {
    name: "Man of Steel",
    rating: 7,
    release: 2013,
    lead: {
        name: "Henry Cavill",
        age: 36,
    },
    director: {
        name: "Zack Snyder",
        otherMovies: ["300", "Batman v Superman"],
    },
};

// ex03
const updateAge = (movieObj) => {
    return {
        ...movieObj,
        lead: { ...movieObj.lead, age: movieObj.lead.age + 1 },
    };
};

// console.log(updateAge(movieUpdated));
// console.log(movieUpdated);

const fruits = ["banana", "orange", "mango"];

// ex04
const addFruit = (fruitsArr, fruitName) => {
    return [...fruitsArr, fruitName];
};

console.log(addFruit(fruits, "apple"));
console.log(fruits);

// hw
const addFruitAtStart = (fruitsArr, fruitName) => {
    return [fruitName, ...fruitsArr];
};

console.log(addFruitAtStart(fruits, "melon"));

// ex05
const replaceFruit = (fruitsArr, fruitName, newFruitName) => {
    return fruitsArr.map((fruit) => {
        return fruitName === fruit ? newFruitName : fruit;
    });
};

console.log(replaceFruit(fruits, "orange", "citrus"));
console.log(fruits);

// ex06
const filterFruit = (fruitsArr, fruitName) => {
    return fruitsArr.filter((fruit) => {
        return fruitName !== fruit && fruit;
    });
};

console.log(filterFruit(fruits, "orange"));
console.log(fruits);

// ex07
const changeFruitByIndex = (fruitsArr, fruitName, index) => {
    return fruitsArr.map((fruit, fruitIndex) => {
        return fruitIndex === index ? fruitName : fruit;
    });
};

console.log(changeFruitByIndex(fruits, "cherry", 1));
console.log(fruits);

// ex08
const insertFruitAtIndex = (fruitsArr, fruitName, index) => {
    return [...fruitsArr.slice(0, index), fruitName, ...fruitsArr.slice(index)];
};

console.log(insertFruitAtIndex(fruits, "cherry", 1));
console.log(fruits);

// var fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
// var citrus = fruits.slice(0, 3);
// Banana,Orange,Lemon

const fruitBasket = [
    { id: 1, name: "mango", quantity: 5 },
    { id: 2, name: "apple", quantity: 4 },
    { id: 3, name: "banana", quantity: 12 },
    { id: 4, name: "strawberry", quantity: 4 }, // aah! ameeri!
];

// ex01
// const updateBasketQuantity = (array, id, incOrDec) => array.map((item, i) => {
//     return id === i ? { ...item, quantity: incOrDec ? item.quantity + 1 : item.quantity - 1 } : item;
// });

const updateBasketQuantity = (array, id, incOrDec) =>
    array.map((item, i) =>
        id === i
            ? { ...item, quantity: incOrDec ? item.quantity + 1 : item.quantity - 1 }
            : item
    );

console.log(updateBasketQuantity(fruitBasket, 1, true));
console.log(fruitBasket);

// ex02
const removeFromBasket = (array, id) => {
    return array.filter((item, i) => {
        return id !== i && item;
    });
};
console.log(removeFromBasket(fruitBasket, 1));
console.log(fruitBasket);

// ex03
const addToBasket = (array, newObj) => {
    return [...array, newObj];
};

console.log(addToBasket(fruitBasket, { id: 4, name: "mango", quantity: 4 }));
console.log(fruitBasket);

const movieUpdated2 = {
    name: "Man of Steel",
    rating: 7,
    release: 2013,
    lead: {
        name: "Henry Cavill",
        age: 36,
    },
    director: {
        name: "Zack Snyder",
        otherMovies: ["300", "Batman v Superman"],
    },
};

// ex04
const updateDirectorMovies = (movieObj, newMovieName) => {
    return {
        ...movieObj,
        director: {
            ...movieObj.director,
            otherMovies: [...movieObj.director.otherMovies, newMovieName],
        },
    };
};
console.log(updateDirectorMovies(movieUpdated2, "Justice League"));
console.log(movieUpdated2);

