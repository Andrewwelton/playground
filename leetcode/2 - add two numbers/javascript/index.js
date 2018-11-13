/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    var l1Node = l1;
    var l2Node = l2;
    var l1Value = 0;
    var l2Value = 0;
    var factor = 1;
    while(l1Node !== null) {
        var tempValue = l1Node.val;
        l1Value += tempValue * factor;
        l1Node = l1Node.next;
        factor = factor * 10;
    }
    factor = 1;
    while(l2Node !== null) {
        var tempValue = l2Node.val;
        l2Value += tempValue * factor;
        l2Node = l2Node.next;
        factor = factor * 10;
    }
    
    var finalValue = l1Value + l2Value;
    var returnHead = null;
    var returnPointer = null;
    while(finalValue != 0) {
        var nodeValue = finalValue % 10;
        var newNode = {
            val: nodeValue,
            next: null
        }
        if(returnHead === null) {
            returnHead = newNode;
        } else {
            returnPointer.next = newNode;
        }
        returnPointer = newNode;
        finalValue = Math.floor(finalValue / 10);
    }
    
    return returnHead;
};