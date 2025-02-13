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
var reverseList = function(listNode) {
    let newList = null
  
while(listNode){
    let next_node = listNode.next
    listNode.next = newList
    newList = listNode
    listNode = next_node
}

return newList

};