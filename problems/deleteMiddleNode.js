// Cracking the Coding Interview
// Problem 2.3: Delete Middle Node

let assert = require('assert')

// node for linked list
class Node {
    constructor(val, next=null) {
        this.val = val
        this.next = next
    }
}

function deleteMiddleNode(head) {
    let fast = slow = prev = head

    if (!fast.next.next) return head

    fast = fast.next.next
    slow = slow.next
    while(fast.next !== null) {
        fast = fast.next.next
        slow = slow.next
        prev = prev.next
    }
    
    prev.next = slow.next

    return head
}

describe('Delete Middle Node', () => {
    it('returns a linked list with the middle node removed', () => {
        let before = new Node(1, new Node(2, new Node(3, new Node(4, new Node(5, new Node(6, new Node(7)))))))
        let after = new Node(1, new Node(2, new Node(3, new Node(5, new Node(6, new Node(7))))))
        assert.deepStrictEqual(after, deleteMiddleNode(before))
    })
    it('shouldn\'t delete the first and last nodes', () => {
        let before = new Node(1, new Node(2))
        let after = new Node(1, new Node(2))
        assert.deepStrictEqual(after, deleteMiddleNode(before))
    })
})