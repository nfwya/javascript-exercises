const palindromes = function (str) {
    let trueStr = str.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"");
    trueStr = trueStr.replace(/\s/g,'');
    const reverse = (str) =>{
        let result = '';
        for(i=str.length-1; i>=0; i--){
            result = result + str[i];
        }
        return result;
    };
    const reverseStr = reverse(trueStr);
    return reverseStr.toLowerCase() === trueStr.toLowerCase();
};

console.log(palindromes("A!#$%^&nimal loots foliated detail of stool lamina."))

// Do not edit below this line
module.exports = palindromes;
