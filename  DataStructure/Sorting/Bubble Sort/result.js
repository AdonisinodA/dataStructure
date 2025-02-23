function bubbleSort(list){
    let length = list.length -1
    let subLength = list.length -1


    for(let i = 0; i  < length; i+=1){
        let isSort = true
        for(let x  = 0; x < subLength; x+=1){
            if(list[x] >list[x+1]){
                isSort = false
                let temp = list[x]
                list[x] = list[x+1]
                list[x+1] = temp
            }
        }
        if(isSort){
            return list
        }
        subLength-=1
    }
    return list
}


console.log(bubbleSort([1,4,3,5,2]))
console.log(bubbleSort([1,2,3,4,5]))

