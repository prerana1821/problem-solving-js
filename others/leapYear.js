// num = 2024;

// if (num % 4 === 0) {
//     console.log(num + ' Leap Year');
// } else {
//     console.log('No');

// }

// let readlineSync = require('readline-sync');

var username = readlineSync.question('What\'s your Name: ');
// console.log(username);

var dateOfBirth = readlineSync.question(username + ', Please Enter your Date of Birth in YYYY/MM/DD format: ');

var split = dateOfBirth.split('/');
// console.log(split); 
split1 = split[0];

// var year = dateOfBirth.substring(0, 4);
// console.log(year);

if (isNaN(parseInt(split1))) {
    console.log('Please Enter a Valid Date Of Birth / Number')
} else {
    if (split1 >= 1000 && split1 <= 9999) {
        if (split1 % 400 === 0) {
            console.log('Congratulations,' + username + ' you were born in a Leap Year!!');
        } else if (split1 % 4 === 0) {
            console.log('Congratulations,' + username + ' you were born in a Leap Year!!');
        } else if (split1 % 100 === 0) {
            console.log('Sorry,' + username + ' you were not born in a Leap Year!!');
        } else {
            console.log('Sorry,' + username + ' you were not born in a Leap Year!!');
        }
    } else {
        console.log('Please Enter  Date Of Birth in Valid Format');
    }
}