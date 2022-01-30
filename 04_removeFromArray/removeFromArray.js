const removeFromArray = function(array) {
    let resultArray = array;
    for(let i = 1; i< arguments.length ; i ++ ){
        console.log(arguments[i]);
        index = resultArray.indexOf(arguments[i]);
        console.log(index)
        if(index !== -1 ){
            resultArray.splice(index,1);
        }
        console.log(resultArray)
    };
    return resultArray;
};
// Do not edit below this line
module.exports = removeFromArray;
