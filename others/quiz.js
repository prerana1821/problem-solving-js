const readlineSync = require('readline-sync');
const chalk = require('chalk');
const fs = require('fs');

var score = 0;
// const maxThreeScores = 3;
// var numberOfPeopleAttendedTheQuiz = 0;

// const names = ['dummy1', 'dummy2', 'dummy3'];
// const scores = [0, 0, 0];

const questions = [{
        question: 'What house at Hogwarts does Harry belong to ? \n',
        options: ['Ravenclaw', 'Slytherin', 'Gryffindor', 'Hufflepuff'],
        answer: 3,
    },
    {
        question: 'What position does Harry play on his Quidditch team ? \n',
        options: ['Keeper', 'Bludger', 'Chaser', 'Seeker'],
        answer: 4,
    },
    {
        question: 'How did Harry get the scar on his forehead ? \n',
        options: [
            "He crached the weasley's car into the whomping tree",
            'He was attacked by a basilisk',
            'In a quidditch accident',
            'Voldermort tried to kill him when he was a baby',
        ],
        answer: 4,
    },
    {
        question: "What does the Sorcerer's Stone do ? \n",
        options: [
            'Transforms any  metal into gold & produces the elixir of life',
            'Makes the one that holds it invisible',
            'Tells the one that holds it their future',
            'Transforms the one who holds it into an animal',
        ],
        answer: 1,
    },
    {
        question: 'Who is Fluffy ? \n',
        options: [
            'A three headed dog',
            "Haary's owl",
            "Hagrid's dragon",
            "Hermione's cat",
        ],
        answer: 1,
    },
    {
        question: 'What power do the dementors have over people ? \n',
        options: [
            'They drain them of all happiness',
            'They make them od their bidding',
            'They make them go crazy',
            'They cause them to harm one another',
        ],
        answer: 1,
    },
    {
        question: 'What does the Imperius Curse do ? \n',
        options: ['Tortures', 'Turns the person into a pig', 'Kills', 'Controls'],
        answer: 4,
    },
    {
        question: 'What is an Auror ? \n',
        options: [
            'A professional qudditch player',
            'A wizard that can change his appearance at will',
            'A career counselor at hogwarts',
            'A person that catches dark wizards',
        ],
        answer: 4,
    },
    {
        question: 'Who kills Professor Dumbledore ? \n',
        options: [
            'Fenrir greyback',
            'Severus snape',
            'Bellatrix lestrange',
            'Draco malfoy',
        ],
        answer: 2,
    },
    {
        question: "Who poses as Mad-Eye Moody, Harry's 4th year Defense Against the Dark Arts professor ? \n",
        options: [
            'Peter pettigrew',
            'Voldermort',
            'Barty crouch, Jr',
            'Sirius black',
        ],
        answer: 3,
    },
];

const name = chalk.blueBright(
    readlineSync.question(
        chalk.yellow('Please enter your name to start the quiz: \n')
    )
);

console.log(
    chalk.bold.magenta(`\t\tWelcome ${name} for harry potter quiz !\n`)
);
console.log(chalk.bold.bgGreenBright('\t\tQuiz starts'));

askQuestions(questions, name);

function askQuestions(questions, name) {
    for (let currentQuestion of questions) {
        let actualQuestion = chalk.greenBright(currentQuestion.question);
        for (let i = 0; i < currentQuestion.options.length; i++) {
            currentQuestion.options[i] = chalk.blueBright(currentQuestion.options[i]);
        }
        let userAnswer = readlineSync.keyInSelect(
            currentQuestion.options,
            actualQuestion
        );

        if (userAnswer + 1 === currentQuestion.answer) {
            console.log(chalk.magentaBright('Correct answer !\n'));
            score++;
        } else console.log(chalk.red('Wrong answer !\n'));
    }
    console.log('Quiz player details');
    console.log(`Name: ${name}`);
    console.log(`Score: ${score}`);

    // var topScorers;

    // fs.readFileSync(
    // 	'highScores.json',
    // 	{ encoding: 'utf8', flag: 'r' },
    // 	function (err, data) {
    // 		if (err) throw err;
    // 		topScorers = JSON.parse(data);
    // 		console.log(topScorers);
    // 		for (let topScorer in topScorers) {
    // 			if (topScorer['score'] < score) {
    // 				topScorer['name'] = name;
    // 				topScorer['score'] = score;
    // 			}
    // 		}
    // 		console.log(topScorers);
    // 		// console.log(topScorers);
    // 	}
    // );

    const topScores = fs.readFileSync('highScores.json');
    console.log(JSON.parse(topScores));
    var topScorers = JSON.parse(topScores);
    for (let topScorer in topScorers) {
        console.log(topScorer);
        console.log(topScorer.name);
        console.log(topScorer.score);

        if (typeof topScorer === 'object') {
            for (let topScore in topScorer) {
                if (topScore['score'] < score) {
                    topScore['name'] = name;
                    console.log(topScore['name']);
                    topScore['score'] = score;
                    console.log(topScore['score']);
                }
            }
        }

        console.log(topScorers);
        // if (topScorer['score'] < score) {
        // 	topScorer['name'] = name;
        // 	topScorer['score'] = score;
        // }
    }

    // fs.appendFileSync('highScores.json', topScorers);

    // console.log(topScorers);

    // fs.writeFile('highScores.json', JSON.stringify(topScorers), function (err) {
    // 	if (err) throw err;
    // });

    // fs.readFile('highScores.json', function (err, data) {
    // 	if (err) throw err;
    // 	topScorers = JSON.parse(data);
    // 	console.log(topScorers);
    // });

    // for (let i = 0; i < scores.length; i++) {
    // 	if (score > scores[i]) {
    // 		scores[i] = score;
    // 		names[i] = name;
    // 		console.log(`You have broken the record and you are number ${i + 1}`);
    // 		console.log('Do send me the screenshot and i will update your score !');
    // 		break;
    // 	}
    // }
}


// json

// {
//     "first": {
//         "name": "",
//             "score": 0
//     },

//     "second": {
//         "name": "",
//             "score": 0
//     },

//     "third": {
//         "name": "",
//             "score": 0
//     }
// }