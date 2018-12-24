const Chance = require('chance');
const chance = new Chance();

function CreateDigit(num){
  const realDigit = num.toString().split('').map(Number);
  let total = 0;
  realDigit.forEach((value, index) => total += value * (index +1));
  const resto = total % 10;
  let digit;
  resto === 0? digit ='x':digit = resto;
  realDigit.push(digit);
  return realDigit.join('');;
}
function ValidateDigit(num){
  if(num.length < 10) return false;
  const arr = num.split('');
  let digit;
  arr[9] === 'x'? digit = 0: digit = Number.parseInt(arr[9])
  arr.pop()
  const realDigit = arr.map(Number);
  let total =0;
  realDigit.forEach((number, index) => total += number * (index+1));
  return (total %10) === digit;
}
function createUUid(){
  let num = chance.integer({min:100000000, max:999999999});
  while(num.toString().length < 9){
    num = chance.integer({ min: 100000000, max:999999999});
  }
  return CreateDigit(num)
}

