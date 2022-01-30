const sumAll = function(lowerNum,higherNum) {
    let result = 0;
    if( ( typeof(lowerNum) !== "number") ||
    ( typeof(higherNum) !== "number" ) ){
        return "ERROR";
    }
    if( lowerNum < 0 || higherNum < 0){
        return "ERROR";
    }
    const trueLowerNum = lowerNum < higherNum ? lowerNum : higherNum;
    const trueHigherNum = lowerNum < higherNum ? higherNum : lowerNum;
    for (let i = trueLowerNum; i<=trueHigherNum ; i++){
        result = result + i;
    }
    return result;
};

console.log( sumAll(1,4) )

// Do not edit below this line
module.exports = sumAll;
