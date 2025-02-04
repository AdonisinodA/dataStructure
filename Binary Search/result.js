function binarySearch(nums = [], num){
    let lo = 0
    let hi = nums.length-1
    let steps = 0
    let mid = 0

    while (lo < hi){
        steps +=1
        mid = Math.trunc(((hi-lo)/2) + lo)

        if(nums[mid] === num){
            console.log(steps)
            return mid
        }else if(nums[mid] < num){
            lo = mid+1
        }else{
            hi = mid -1
        }
    }

    return -1

}