/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
    for (let i = digits.length - 1; i >= 0; i -= 1) {
        if(digits[i] < 9){
            digits[i] = digits[i] +1
            return digits
        }else{
            if(i === 0){
            digits[i] = 1
            }else{
            digits[i] = 0
            }
        }
    }

    digits[digits.length] = 0
    return digits

};