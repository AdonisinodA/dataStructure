/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    let fast = head
    let slow = head
    let result = false

    while(fast && fast.next && !result){
        fast = fast.next.next
        slow =slow.next
        if(fast === slow){
            result = true
        }
    }

    return result
    
};