/**
 * @param {string}
 * @return {number}
 */
var maximumLengthSubstring = function(s) {
    let max = 1
    let r =0
    let l =0
    let dict = new Map()
    dict.set(s[0],1)

    while(r < (s.length -1)){
        r+=1
        if(dict.get(s[r])){
            dict.set(s[r], dict.get(s[r]) +1)
        }else{
            dict.set(s[r], 1)
        }

        while(dict.get(s[r]) === 3){
            dict.set(s[l], dict.get(s[l]) -1)
            l+=1
        }
        max = Math.max(max,r-l+1)
    }

    return max
    
};