var missingNumber = function(nums) {
    let res = nums.length 

    for(let i = 0; i < nums.length; i+=1){
        res ^= i ^ nums[i]
    }
    return res
    
};
// 1^1 = 0
// Eliminates all equals