//  what are callback hell ?

// function fullName(name, callback) {
// 	callback(name);
// }

// fullName('sam', (name) => {
// 	console.log('Hello ' + name);
// });

// first(2, (firstResult, err) => {
// 	if (!err) {
// 		console.log(firstResult);
// 		second(firstResult + 2, (secondResult, err) => {
// 			if (!err) {
// 				console.log(secondResult);
// 				third(secondResult + 2, (thirdResult, err) => {
// 					if (!err) {
// 						console.log(thirdResult);
// 					}
// 				});
// 			}
// 		});
// 	}
// });

function first(value, callback) {
	callback(value, false);
}

function second(value, callback) {
	callback(value, false);
}

function third(value, callback) {
	callback(value, false);
}

const strLength = (name, callback) => {
	const nameLength = name.length;
	callback(nameLength);
};

// strLength('sam', (nameLen) => console.log(`OMG! my name is ${nameLen} long! `));

// const willThanosKillMe = (name, success, failure) => {
// 	if (name.length % 2 === 0) {
// 		success();
// 	} else {
// 		failure();
// 	}
// };

// willThanosKillMe(
// 	'samson',
// 	() => {
// 		console.log('Live');
// 	},
// 	() => {
// 		console.log('Die');
// 	}
// );

const displayAfterDelay = (msg, delay) => {
	setTimeout(() => {
		console.log(msg);
	}, delay);
};

// displayAfterDelay("super mario", 2000);

// setTimeout(() => console.log('A'), 0);
// setTimeout(() => console.log('C'), 0);
// setTimeout(() => console.log('B'), 0);

// setTimeout(() => console.log("A", 1000));
// setTimeout(() => console.log("B", 400));
// setTimeout(() => console.log("C", 1300));

// console.log("A");
// setTimeout(() => console.log("B", 0));
// setTimeout(() => console.log('C', 0));
// console.log("D");

const displayAfterEveryInterval = (msg, delay) => {
	setInterval(() => {
		console.log(msg);
	}, delay);
};

// displayAfterEveryInterval("hi sam !", 3000);

const countDown = (count, delay) => {
	let myInterval = setInterval(() => {
		if (count < 1) {
			console.log('Bang Bang !');
			clearInterval(myInterval);
		} else {
			console.log(count--);
		}
	}, delay);
};

countDown(5, 1000);

const fakeFetch = (isResolve, msg) => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			if (isResolve) {
				resolve('from server: resolved ' + msg);
			} else {
				reject('from server: rejected ' + msg);
			}
		}, 1000);
	});
};

// rejection attach callback ?
// console.log(fakeFetch(true, "sam").then((data) => console.log(data)).catch(err => console.log(err)));

// ex12: console.error(err);

const getServerResponseLength = (msg) => {
	// resolve() - promise
	// reject() - promise
	// no return just logging
	return fakeFetch(true, msg).then((data) => data.length);
};

// console.log(getServerResponseLength("sam"));
// getServerResponseLength('samson').then((data) => console.log(data));

// const syncCallsToServer = (msg1, msg2) => {
// 	return (
// 		fakeFetch(true, msg1)
// 			// resolve()
// 			.then((data) => fakeFetch(true, data + msg2))
// 			// resolve()
// 			.then((data) => data)
// 	);
// };

const syncCallsToServer = async (msg1, msg2) => {
	try {
		const data1 = await fakeFetch(true, msg1);
		const data2 = await fakeFetch(true, data1 + msg2);
		console.log(data2);
	} catch (err) {
		console.log(err);
	}
};

// syncCallsToServer('hi', 'bye');

// resolve() - promise
// syncCallsToServer('hi', 'bye').then((data) => console.log(data));

const fetchWithAsyncAwait = async (msg, isResolve) => {
	try {
		const data = await fakeFetch(msg, isResolve);
		console.log(data);
	} catch (err) {
		console.error(err);
	}
};

// console.log(fetchWithAsyncAwait('hi', true));
