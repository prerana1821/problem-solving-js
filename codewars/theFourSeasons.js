function fourSeasons(day) {
    // console.log(day);
    if (day >= 355 && day < 366 || day <= 79) {
        return 'Winter Season';
    } else if (day < 172) {
        return 'Spring Season';
    } else if (day >= 172 && day <= 263) {
        return 'Summer Season';
    } else if (day >= 263 && day < 355) {
        return 'Autumn Season';
    } else {
        return 'The year flew by!';
    }
}

// function fourSeasons(day) {
//     return (day >= 355 && day < 366 || day <= 79) ? 'Winter Season' : day < 172 ? 'Spring Season' : day >= 172 && day <= 263 ? 'Summer Season' : day >= 263 && day < 355 ? 'Autumn Season' : 'The year flew by!';
// }

console.log(fourSeasons(33));