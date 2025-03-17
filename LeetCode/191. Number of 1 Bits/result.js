

// Without bitwise

/**
 * @param {number} n
 * @return {number}
 */
var hammingWeight = function(n) {
    const binary = n.toString(2).split('')
    let count = 0
    for(let i = 0; i < binary.length; i+=1){
        if(Number(binary[i]) > 0) {
            count +=1
        }
    }
    return count    
};

// With bitwise
/**
 * @param {number} n
 * @return {number}
 */
var hammingWeight = function(n) {
    const maxBit = 32
    let count = 0
    for(let i = 0; i < maxBit; i+=1){
        if((n >> i) & 1) {
            count +=1
        
        }
    }
    return count    
};
