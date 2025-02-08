/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function (s) {
    const dict = new Map()
    let result = -1

    for (i = 0; i < s.length; i++) {

        if (!dict.get(s[i])) {
            dict.set(s[i], [i, 1])
        } else {
            dict.set(s[i],2)
        }
    }
 
  
    for (item of dict) {
        if (item[1][1] === 1) {
            if(result === -1){
                result = item[1][0]
            }
            
        }
    }


    return result

};
