const URL = "https://api.github.com/users/prerana1821";

const user = fetch(URL);
console.log(user);
user.then((response) => {
  console.log(response);
});

function createOrder(cart) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!validayeCart(cart)) {
        const error = new Error("Cart is not valid");
        reject(error);
      } else {
        const corderId = "12345";
        if (orderId) {
          resolve(oderId);
        }
      }
    }, 200);
  });
}

const cart = ["shoes", "pants", "kurta"];
const promise = createOrder(cart);
promise.then(function (orderId) {
  proceedToPayment(orderId);
});
