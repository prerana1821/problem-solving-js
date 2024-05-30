/* 

Problem Statement -
Implement a function in JavaScript that retries promises N number of times with a delay between each call.

Example
Input: retry(asyncFn, retries = 3, delay = 50, finalError = 'Failed');
Output:
... attempt 1 -> failed
... attempt 2 -> retry after 50ms -> failed
... attempt 3 -> retry after 50ms -> failed
... Failed.

*/

const wait = (ms) =>
  new Promise((resolve) => {
    setTimeout(() => resolve(), ms);
  });

async function retry(func, retries = 3, delay = 50, finalError = "Failed") {
  try {
    await func();
  } catch (error) {
    if (retries <= 0) {
      return Promise.reject(finalError);
    }

    await wait(delay);

    retry(func, retries - 1, delay, finalError);
  }
}

const getTestFunc = () => {
  let callCounter = 0;
  return async () => {
    callCounter += 1;
    // if called less than 5 times
    // throw error
    if (callCounter < 5) {
      throw new Error("Not yet");
    }
  };
};

// Test the code
const test = async () => {
  await retryWithDelay(getTestFunc(), 10);
  console.log("success");
  await retryWithDelay(getTestFunc(), 3);
  console.log("will fail before getting here");
};

// Print the result
test().catch(console.error);
