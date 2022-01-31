const add = function(num1,num2) {
  if(typeof(num1) !== 'number' ||
  typeof(num2) !== 'number'){
    return 'ERROR';
  }
  return num1 + num2 ;
};

const subtract = function(num1,num2) {
  if(typeof(num1) !== 'number' ||
  typeof(num2) !== 'number'){
    return 'ERROR';
  }
  return num1 - num2;
};

const sum = function(arr) {
	return ( arr.reduce(
    (acc,curr,index,arr) => {return acc + curr}, 0) );
};

const multiply = function(arr) {
  return ( arr.reduce(
    (acc,curr,ind,arr) => { return acc * curr}, 1
  ));

};

const power = function(base, power) {
  let result = 1;
  for(let i=0; i<power; i++){
    result = result * base;
  }
  return result;
};

const factorial = function(num) {
  let result = 1;
  for(let i=1; i<=num ; i++){
    result = result * i;
  }
  return result;
	
};

//console.log( multiply([1,2,3,4]) );
//console.log(power(3,4))
//console.log(factorial(5))

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
