/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function(n) {
    let result =[]
    for(let i = 0; i <= n; i+=1){
        const bit = calcBits(i)
        result.push(bit)
    }
    return result
};


var calcBits = function(n){
    let result = 0
    
    for(let i = 0; i < 32; i +=1){
        if((n >> i) & 1){
            result +=1
        }
    }

    return result
}