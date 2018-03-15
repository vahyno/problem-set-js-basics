function fizzbuzz(numberArray){
  for (number of numberArray){
    if(number%3 === 0 && number%5 === 0 ){
      //return "fizzbuzz"
      console.log('fizzbuzz');
    }else if(number%3 === 0){
     // return "fizz"
      console.log('fizz');
    }else if (number%5 === 0){
      //return "buzz"
      console.log('buzz');
    }else {
      console.log(number)
    }
  }
}

fizzbuzz([15,5,6,2,7,15,20,99]);
console.log("-------------------")

function calculator(numberA,numberB,operation){
  switch (operation){
    case 'add':
      return numberA + numberB;
      break;
    case 'substract':
      return numberA - numberB;
      break;
    case 'multiply':
      return numberA * numberB;
      break;
    case 'divide':
      return numberA / numberB;
      break;
    default:
      return "wrong input"
  }
}

console.log(calculator(19,4,'add'));
console.log(calculator(19,4,'divide'));
console.log(calculator(19,4,'substract'));
console.log(calculator(19,4,'multiply'));
