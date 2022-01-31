const fibonacci = function(num) {
    if(num < 0){
        return 'OOPS';
    }
    let current = 1;
    let previous = 0;
    let previous_two = 0;
    for(i=1; i<num; i++){
        let tmpCurrent = current;
        current = previous + current;
        previous_two = previous;
        previous = tmpCurrent;
    }
    return current;
};

console.log(fibonacci(1));
console.log(fibonacci(2));
console.log(fibonacci(3));
console.log(fibonacci(4));

// Do not edit below this line
module.exports = fibonacci;
