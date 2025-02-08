var containsNearbyDuplicate = function (nums, k) {
    let seen = {}
    let result = false

    for(i =0; i <= nums.length -1; i++){
        if(typeof seen[nums[i]] === "number" && i - seen[nums[i]] <= k){
            result =  true
            i = nums.length +1
        }else{
            seen[nums[i]] = i
        }
    }
    

    return result

};
