// Cracking the Coding Interview
// Problem 2.2: Return Kth to Last

let assert = require('assert')

// node for linked list
class Node {
    constructor(val, next=null) {
        this.val = val
        this.next = next
    }
}
function kthToLast(head, k) {
    let slow = fast = head

    for (let i = 0; i < k; i++) {
        fast = fast.next
    }

    while(fast.next !== null) {
        fast = fast.next
        slow = slow.next
    }

    return slow
}

describe('kth to last node in a linked list', () => {
    it('return the kth to last node', () => {
        let list = new Node(1, new Node(2, new Node(3, new Node(4, new Node(5, new Node(6))))))
        assert.strictEqual(3, kthToLast(list, 3).val)
    })
})