var missingNumber = function(nums) {
    let res = nums.length * (nums.length +1) /2  // gauss

    for(let i = 0; i < nums.length; i+=1){
        res -= nums[i]
    }
    return res
    
};