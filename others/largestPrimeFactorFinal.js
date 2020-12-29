function largestPrimeFactor(number) {
    let primesAndFactor = [];
    // find all factors
    for (let factorIterator = 0; factorIterator <= number; factorIterator++) {
        // check if factor; using our handy friend Modulo
        let isFactor = number % factorIterator == 0;
        let isPrime = true;

        if (isFactor) {
            // see if factor is a prime
            // a prime number has two factors, 1 and itself
            for (let i = 2; i < factorIterator; i++) {
                // console.log(i, factorIterator, factorIterator % i)
                if (factorIterator % i == 0) {
                    isPrime = false;
                    continue;
                }
            }
        }

        // if so, push to primes list
        if (isFactor && isPrime) {
            primesAndFactor.push(factorIterator);
        }
    } // end for loop

    // return last element of array
    return primesAndFactor.pop();
}

largestPrimeFactor(13195);
