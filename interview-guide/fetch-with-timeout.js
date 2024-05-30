//  create a fetch method with Timeout in JavaScript that will terminate the API call, if it is fulfilled in the given duration.

const fetchWithTimeout = (url, duration) => {
  return new Promise((resolve, reject) => {
    const controller = new AbortController();
    const signal = controller.signal;
    let timerid = null;

    fetch(url, { signal })
      .then((resp) => {
        resp
          .json()
          .then((e) => {
            clearTimeout(timerid);
            resolve(e);
          })
          .catch((error) => {
            reject(error);
          });
      })
      .catch((error) => {
        reject(error);
      });

    timerid = setTimeout(() => {
      console.log("Aborted");
      controller.abort();
    }, duration);
  });
};

fetchWithTimeout("https://jsonplaceholder.typicode.com/todos/1", 100)
  .then((resp) => {
    console.log(resp);
  })
  .catch((error) => {
    console.error(error);
  });
