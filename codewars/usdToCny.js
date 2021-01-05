// function usdcny(usd) {
//     return `${(usd * 6.75).toFixed(2)} Chinese Yuan`
// }

// function usdcny(usd) {
//     // console.log((usd * 6.75) * 10);
//     // console.log((usd * 6.75) * 10 / 100);
//     let cny = (usd * 6.75) * 100 / 100;
//     // let cny = 25204.5;
//     // console.log(cny);
//     if (cny % 1 === 0) {
//         return `${cny += '.00'} Chinese Yuan`;
//     } else if (cny % 1 === 0.5) {
//         return `${cny += '0'} Chinese Yuan`;
//     } else {
//         return `${cny} Chinese Yuan`;
//     }
// }

function usdcny(usd) {
    const yuan = (usd * 6.75) * 100 / 100;
    const cy = 'Chinese Yuan';
    return yuan % 1 === 0 ?
        `${yuan}.00 ${cy}` :
        yuan % 1 === 0.5 ?
        `${yuan}0 ${cy}` :
        `${yuan} ${cy}`;
}

// Math.floor((usd * 6.75) * 100) / 100
usdcny(465);
// 3138.75 Chinese Yuan
// 10.0' % 1