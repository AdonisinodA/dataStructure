/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode = function(head) {
    let copyHead = head
    // faz com que o copyHead mova 2x mais rápido que o head,
    //  assim quando o copyHead chegar no final, o head estará no meio
    while(copyHead && copyHead.next){
        copyHead = copyHead.next.next
        head = head.next
    }

    return head
    
};