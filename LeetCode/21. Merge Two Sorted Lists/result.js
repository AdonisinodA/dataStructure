/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {

    let list =[]

    while(list1){
        list.push(list1.val)
        list1 = list1.next  
    }
    
    while(list2){
        list.push(list2.val)
        list2 = list2.next
    }

    list.sort((a,b)=>{
        return a -b
    })
    let s = null
    let t = null
    s = t = new ListNode()
    for(let i = 0; i < list.length; i++){
        s.next = new ListNode(list[i])
        s = s.next
    }

    return t.next


};