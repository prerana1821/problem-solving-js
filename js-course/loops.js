const game = {
    "suspects": [
        { name: "John", color: "green" },
        { name: "Newy", color: "yellow" }
    ],
}

function foo() {
    for (let i = 0; i < game.suspects.length; i++) {
        console.log(game.suspects[i]);
    }
}

console.log(foo()); // { name: 'John', color: 'green' }

console.log(game.suspects.map((suspect) => {
    return suspect;
}));
// [ { name: 'John', color: 'green' }, { name: 'Newy', color: 'yellow' } ]


const [red, orange] = [
    { name: "John", color: "green" },
    { name: "Newy", color: "yellow" }
]

console.log(red);
console.log(orange);

const suspects = [
    { name: "John", color: "green" },
    { name: "Newy", color: "yellow" }
]

const [color1, color2] = suspects

console.log(color1);
console.log(color2);



