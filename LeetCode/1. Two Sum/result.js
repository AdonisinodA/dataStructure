/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let dict = {}

    let result =[]
    
    for(let i = 0; i < nums.length; i++){
        if(typeof dict[nums[i]] === 'number'){
            result = [dict[nums[i]], i]
        }
        dict[target - nums[i]] = i
    }


    return result
};
    
