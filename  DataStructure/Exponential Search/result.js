function binarySearch(nums = [], num, lo, hi){
    let mid = 0

    while (lo < hi){
        mid = Math.trunc(((hi-lo)/2) + lo)

        if(nums[mid] === num){
            return mid
        }else if(nums[mid] < num){
            lo = mid+1
        }else{
            hi = mid -1
        }
    }

    return -1
}

function exponentialSearch(arr, target){
    if(arr[0] === target){
        return 0
    }
    let lengthNums= arr.length -1

    let r = 1

    while(r < lengthNums -1 && arr[r] < target){
        i*=2
    }

    let minR = Math.trunc(Math.min(lengthNums,arr[r]))
    
    if(minR === target){
        return minR
    }

    binarySearch(arr, target, Math.trunc(r/2) +1, minR -1)
}