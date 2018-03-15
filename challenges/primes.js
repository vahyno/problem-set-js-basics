/*

  1. Create a function `isPrime(num)` that returns true if the number passed in is a prime number
      and false if not.
  2. Using your `isPrime` function, create a function `primes(max)` that will return an array of all
      prime numbers up to, but not exceeding a max number.

  Reading: http://stackoverflow.com/questions/439870/why-are-primes-important-in-cryptography

*/

// YOUR CODE HERE

function isPrime(num) {
    var isPrime = true;
    for(var i = 2; i < num; i++) {
        if(num % i === 0) {
            isPrime= false;
            break;
        }
    }
    return isPrime;
}

console.log(isPrime(7));



function isPrimes(max) {
  let myArray = [];
//  debugger
//go thourgh numbers 2 up to max
  for (var i = 2; i <= max; i++) {
    //check each number if prime (isPrime(i))
      if(isPrime(i)) {
        //write down if prime and store (push to answer array)
          myArray.push(i);
      }
  }
  //return array of all prime numbers found
  return myArray;
}

console.log(isPrimes(99));

//isPrimes(10);
