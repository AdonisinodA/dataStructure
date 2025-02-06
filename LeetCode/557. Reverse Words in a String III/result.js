var reverseWords = function(s) {
    let l = 0
    let r = 0
    
    let result = ''
    
    while(r <= s.length){
        if(s[r] !== ' ' && r !== s.length){
            r+=1
        }else{
             r+=1
            result += s.substring(l,r-1).split('').reverse().join('')+' '
        
            l =r
        } 
    }
    return result.substring(0,r-1)
    }
    