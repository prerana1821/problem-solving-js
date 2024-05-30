function parseCookieString(str) {
  const [nameValue, ...rest] = str.split(";");

  const [key, value] = separateKeyValue(nameValue);

  const options = {};
  for (const option of rest) {
    const [key, value] = separateKeyValue(option);
    options[key] = value;
  }

  return {
    key,
    value,
    options,
  };
}

function separateKeyValue(str) {
  return str.split("=").map((s) => s.trim());
}

function useCustomCookie() {
  const store = new Map();

  Object.defineProperty(document, "myCookie", {
    configurable: true,
    get() {
      const cookies = [];
      const time = Date.now();

      for (const [name, { value, expires }] of store) {
        if (expires <= time) {
          store.delete(name);
        } else {
          cookies.push(`${name}=${value}`);
        }
      }

      return cookies.join("; ");
    },

    set(val) {
      const { key, value, options } = parseCookieString(val);

      let expires = Infinity;
      if (options["max-age"]) {
        expires = Date.now() + Number(options["max-age"]) * 1000;
      }

      store.set(key, { value, expires });
    },
  });
}

useCustomCookie();
document.myCookie = "blog=learnersbucket";

// this will expire after 1 second
document.myCookie = "name=prashant;max-age=1";

console.log(document.myCookie);

setTimeout(() => {
  console.log(document.myCookie);
}, 1500);

// Output:
// "blog=learnersbucket; name=prashant";
// ("blog=learnersbucket");
