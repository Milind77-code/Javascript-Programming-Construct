function getPrimeFactorsFor(num) {
    const primes = [];
    for (let factor = 2; factor <= num; factor++) {
      while ((num % factor) === 0) {
        primes.push(factor);
        num /= factor;
      }
    }
    return primes;
  }
  
  
  console.log("10 has the primes: ", getPrimeFactorsFor(10));
  console.log("8 has the primes: ", getPrimeFactorsFor(8));
  
  console.log("105 has the primes: ", getPrimeFactorsFor(105))
  console.log("1000 has the primes: ", getPrimeFactorsFor(1000))
  console.log("1155 has the primes: ", getPrimeFactorsFor(1155))